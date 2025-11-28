document.addEventListener('DOMContentLoaded', function() {
    // ================= 設定區 =================
    const DIFY_API_KEY = '請在此填入您的_DIFY_API_KEY'; 
    const DIFY_API_URL = 'http://dify.hle.com.tw/v1/chat-messages';
    // =========================================

    // 1. 注入 HTML 結構 (動態生成，不用手動貼 HTML 了)
    const chatbotHTML = `
        <div id="custom-chatbot-container">
            <button id="chatbot-toggle-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </button>
            <div id="chatbot-window" class="hidden">
                <div class="chat-header">
                    <span>北研編輯手冊助手</span>
                    <button id="close-chat-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                <div id="chat-messages">
                    <div class="message bot-message">你好！我是翰林北研編輯手冊助手，關於手冊內容有任何問題都可以問我喔！</div>
                </div>
                <div class="chat-input-area">
                    <input type="text" id="chat-input" placeholder="請輸入問題..." />
                    <button id="send-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>
            </div>
        </div>
    `;

    // 將 HTML 插入到 body 的最後面
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    // 2. 以下是邏輯部分 (與之前相同)
    const toggleBtn = document.getElementById('chatbot-toggle-btn');
    const closeBtn = document.getElementById('close-chat-btn');
    const chatWindow = document.getElementById('chatbot-window');
    const inputField = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const messagesContainer = document.getElementById('chat-messages');
    
    let userId = localStorage.getItem('dify_user_id');
    if (!userId) {
        userId = 'user_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('dify_user_id', userId);
    }

    function toggleChat() {
        chatWindow.classList.toggle('hidden');
    }

    toggleBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    sendBtn.addEventListener('click', handleSend);
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    async function handleSend() {
        const text = inputField.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        inputField.value = '';
        inputField.disabled = true;

        const loadingId = addMessage('正在思考中...', 'bot', true); 

        try {
            const response = await fetch(DIFY_API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${DIFY_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "inputs": {},
                    "query": text,
                    "response_mode": "blocking",
                    "conversation_id": "", 
                    "user": userId
                })
            });

            const data = await response.json();
            removeMessage(loadingId);

            if (!response.ok) throw new Error(data.message || 'API Error');

            addMessage(data.answer, 'bot');

        } catch (error) {
            console.error('Error:', error);
            removeMessage(loadingId);
            addMessage('連線異常，請檢查 API Key 或網路狀態。', 'bot');
        } finally {
            inputField.disabled = false;
            inputField.focus();
        }
    }

    function addMessage(text, sender, isLoading = false) {
        const div = document.createElement('div');
        div.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        div.textContent = text;
        
        if (isLoading) {
            div.id = 'loading-msg';
            div.style.fontStyle = 'italic';
            div.style.opacity = '0.7';
        }

        messagesContainer.appendChild(div);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return div.id;
    }

    function removeMessage(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }
});