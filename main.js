// ================= 資料設定區 =================
const articles = [
    { id: 0, slug: '', title: '翰林創立故事與品牌精神', subtitle: '關於翰林', cover: '', summary: '綜覽翰林的發展歷程與品牌精神。' },
    { id: 1, slug: 'article-1', title: '一本課本到學生手中要走過的路', subtitle: '關於翰林', cover: './image/article-1-cover.jpg', summary: '認識翰林集團架構與教科書完整研發流程。' },
    { id: 2, slug: 'article-2', title: '教科書新編及修改送審流程', subtitle: '基礎通識', cover: './image/article-2-cover.jpg', summary: '審查法規重點說明與異常案例處置教學。' },
    { id: 3, slug: '', title: '開會流程與溝通技巧', subtitle: '基礎通識', cover: './image/article-3-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 4, slug: '', title: '設計風格與聚焦', subtitle: '教科書製作', cover: './image/article-4-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 5, slug: '', title: '拍照邀約及注意事項', subtitle: '教科書製作', cover: './image/article-5-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 6, slug: '', title: '發插畫注意事項', subtitle: '教科書製作', cover: './image/article-6-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 7, slug: '', title: '用色規範', subtitle: '教科書製作', cover: './image/article-7-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 8, slug: '', title: '封面設計流程與注意事項', subtitle: '教科書製作', cover: './image/article-8-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 9-1, slug: '', title: '著作權法與出版編務手冊', subtitle: '基礎通識', cover: './image/article-9-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 9-2, slug: '', title: '肖像權編輯手冊', subtitle: '基礎通識', cover: '', summary: '尚未開放，敬請期待' },
    { id: 10, slug: '', title: '內容授權流程（文、圖、照片）', subtitle: '基礎通識', cover: './image/article-10-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 11, slug: '', title: '版面規劃與亮點發想', subtitle: '教科書製作', cover: './image/article-11-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 13, slug: '', title: '校對規範及流程', subtitle: '教科書製作', cover: './image/article-13-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 14, slug: '', title: '諮詢會議（多人會議或1對1訪談）', subtitle: '基礎通識', cover: './image/article-14-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 15, slug: '', title: '國中實體書->電子書進稿流程及注意事項', subtitle: '教科書製作', cover: './image/article-15-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 16, slug: '', title: '國小實體書->電子書進稿流程及注意事項', subtitle: '教科書製作', cover: './image/article-16-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 18, slug: '', title: '課本呈現組成及相關製作流程', subtitle: '教科書製作', cover: './image/article-18-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 19-1, slug: '', title: '送製流程', subtitle: '教科書製作', cover: './image/article-19-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 19-2, slug: '', title: '品檢流程、彩稿管理', subtitle: '教科書製作', cover: '', summary: '尚未開放，敬請期待' },
    { id: 20, slug: '', title: '成書檢核及異常回報', subtitle: '教科書製作', cover: './image/article-20-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 21, slug: '', title: '跑校注意事項', subtitle: '教科書市場服務', cover: './image/article-21-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 22, slug: '', title: '教材說明會如何講', subtitle: '教科書市場服務', cover: './image/article-22-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 23, slug: '', title: '客訴處理流程及回覆注意事項', subtitle: '教科書市場服務', cover: './image/article-23-cover.jpg', summary: '尚未開放，敬請期待' }
];

window.articles = articles; // 對外暴露資料

// ================= 1. 自動產生 Header (頁首) =================
function renderHeader() {
    const headerEl = document.getElementById('site-header');
    if (!headerEl) return;

    headerEl.innerHTML = `
    <header class="bg-white shadow-md sticky top-0 z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex-shrink-0 flex items-center gap-3">
                    <a href="./index.html" class="flex items-center gap-3">
                        <img src="./image/logo.png" alt="翰林 Logo" class="logo-img">
                        <span class="text-3xl font-bold text-hanlin-blue tracking-wider">北研編輯手冊</span>
                    </a>
                </div>
                <nav class="hidden md:flex space-x-4 items-center">
                    <a href="./index.html" class="bg-hanlin-gold text-white hover:opacity-90 transition px-4 py-2 rounded-lg font-medium">首頁</a>
                    <button onclick="openSitemap()" class="bg-hanlin-sky text-white hover:opacity-90 transition px-4 py-2 rounded-lg font-medium">手冊目錄</button>
                </nav>
                <div class="md:hidden">
                    <button id="menu-toggle" class="text-gray-500 hover:text-hanlin-blue p-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
        </div>
        <div id="mobile-menu" class="md:hidden hidden bg-white shadow-inner">
            <a href="./index.html" class="block px-4 py-3 text-sm border-t hover:bg-blue-50">首頁</a>
            <button onclick="openSitemap()" class="block w-full text-left px-4 py-3 text-sm border-t hover:bg-blue-50">手冊目錄</button>
        </div>
    </header>
    `;
}

// ================= 2. 自動產生 Footer (頁尾) =================
function renderFooter() {
    const footerEl = document.getElementById('site-footer');
    if (!footerEl) return;

    footerEl.innerHTML = `
    <footer class="bg-gray-800 text-white py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
            <p>&copy; 2024 翰林北研編輯手冊. 版權所有.</p>
            <p class="mt-2 text-gray-400">內部培訓與參考文件。</p>
        </div>
    </footer>
    `;
}

// ================= 3. 其他原本的功能 =================
function renderSitemap(items) {
    const sitemapListEl = document.getElementById('sitemap-list');
    if (!sitemapListEl) return;

    const grouped = items.reduce((acc, item) => {
        const key = item.subtitle || '其他';
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});

    sitemapListEl.innerHTML = Object.entries(grouped).map(([subtitle, entries]) => `
        <section class="space-y-3">
            <div class="mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">${subtitle}</div>
            <div class="space-y-4">
                ${entries.map(item => `
                    <a href="./${item.slug}.html" class="sitemap-link group">
                        <div class="flex items-start">
                            <h3 class="text-base font-bold text-gray-900 mb-1 group-hover:text-hanlin-blue">${item.title}</h3>
                        </div>
                    </a>
                `).join('')}
            </div>
        </section>
    `).join('');
}

function renderHomeCards(items) {
    const grid = document.getElementById('articles-grid');
    if (!grid) return;
    
    // ... (保留原本卡片生成的邏輯，這裡省略以節省空間) ...
    // 請保留原本 renderHomeCards 的完整程式碼
    const grouped = items.reduce((acc, item) => {
        const key = item.subtitle || '其他';
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});

    const renderCard = item => {
        const cover = item.cover || './image/hero-bg.jpg';
        // 判斷是否有連結 (slug 是否為空)
        const hasLink = item.slug && item.slug.trim() !== '';
        // 如果有連結就用 <a href="...">，否則用 <div class="..."> (不可點擊)
        const linkTagStart = hasLink ? `<a href="./${item.slug}.html"` : `<div`;
        const linkTagEnd = hasLink ? `</a>` : `</div>`;
        const titleLink = hasLink ? `<a href="./${item.slug}.html">${item.title}</a>` : item.title;
        const readMoreBtn = hasLink ? `
            <a href="./${item.slug}.html" class="inline-flex items-center text-hanlin-blue hover:opacity-80 font-medium group-hover:translate-x-1 transition-transform duration-300">
                閱讀全文
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>` : `<span class="text-gray-400 text-sm cursor-not-allowed">內容建置中</span>`;

        return `
            <div class="article-card bg-white border border-gray-100 group relative flex flex-col h-full ${!hasLink ? 'opacity-70' : ''}">
                ${linkTagStart} class="block overflow-hidden rounded-t-xl cursor-pointer">
                    <img src="${cover}" alt="${item.title}" class="w-full h-48 object-cover transform transition duration-300 group-hover:scale-105">
                ${linkTagEnd}
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-hanlin-blue transition duration-300">
                        ${titleLink}
                    </h3>
                    <p class="text-gray-600 mb-4 line-clamp-3 flex-grow">${item.summary || ''}</p>
                    <div class="mt-auto pt-4">
                        ${readMoreBtn}
                    </div>
                </div>
            </div>
        `;
    };

    grid.innerHTML = Object.entries(grouped)
        .map(([subtitle, items]) => `
            <section class="space-y-6">
                <h2 class="text-3xl font-bold text-gray-900 mb-12 border-b-2 border-hanlin-blue pb-3">${subtitle}</h2>
                <div class="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
                    ${items.map(renderCard).join('')}
                </div>
            </section>
        `).join('');
}

function setupNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        mobileMenu.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

function setupSitemapPanel() {
    // ... (保留原本的 Sitemap 邏輯) ...
    const sitemapPanel = document.getElementById('sitemap-panel');
    const sitemapBackdrop = document.getElementById('sitemap-backdrop');
    const body = document.body;
    
    // 定義全域函數供 onclick 呼叫
    window.openSitemap = function() {
        if(sitemapBackdrop && sitemapPanel) {
            sitemapBackdrop.classList.remove('hidden');
            setTimeout(() => {
                sitemapBackdrop.classList.remove('opacity-0');
                sitemapPanel.classList.remove('translate-x-full');
            }, 10);
            body.style.overflow = 'hidden';
        }
    }

    window.closeSitemap = function() {
        if(sitemapBackdrop && sitemapPanel) {
            sitemapPanel.classList.add('translate-x-full');
            sitemapBackdrop.classList.add('opacity-0');
            setTimeout(() => {
                sitemapBackdrop.classList.add('hidden');
                body.style.overflow = '';
            }, 300);
        }
    }
}

// ================= 4. 初始化全站 (Init) =================
function initSite() {
    renderHeader();      // 1. 先畫出 Header
    renderFooter();      // 2. 再畫出 Footer
    setupNavigation();   // 3. Header 出現後，才能綁定手機版選單事件
    setupSitemapPanel(); // 4. 設定側邊欄目錄
    renderSitemap(articles); 
    renderHomeCards(articles);
}

document.addEventListener('DOMContentLoaded', initSite);