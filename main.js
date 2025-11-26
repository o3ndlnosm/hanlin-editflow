const articles = [
    { id: 1, slug: 'article-1', title: '一本課本從研發到學生手上的過程', subtitle: '關於翰林', cover: './image/article-1-cover.jpg', summary: '認識翰林集團架構與教科書完整研發流程。' },
    { id: 2, slug: 'article-2', title: '教科書編輯修訂送審流程說明', subtitle: '基礎通識', cover: './image/article-3-cover.jpg', summary: '審查法規重點說明與異常案例處置教學。' },
    { id: 3, slug: 'article-3.4.11.12', title: '編撰會議（及開會技巧）', subtitle: '基礎通識', cover: './image/article-3-cover.jpg', summary: '與作者開會的技巧，如何主持及明確會議目的，問題決策及下一步該做什麼，確保會議有明確決議與追蹤。' },
    { id: 4, slug: 'article-3.4.11.12', title: '美術設計討論', subtitle: '教科書製作', cover: './image/article-4-cover.jpg', summary: '如何找參考圖或照片，用關鍵字形容表現手法，整本的風格、用色、人物亮點等定調。' },
    { id: 5, slug: 'article-5', title: '拍照邀約及注意事項', subtitle: '教科書製作', cover: './image/article-5-cover.jpg', summary: '拍照通常都是文編邀約與準備，本單元說明攝影流程、模特兒授權與現場執行細節。' },
    { id: 6, slug: 'article-6', title: '發插畫注意事項', subtitle: '教科書製作', cover: './image/article-6-cover.jpg', summary: '插畫發包的溝通技巧、規格確認以及如何與插畫家進行有效修正與回饋。' },
    { id: 7, slug: 'article-7', title: '用色規範', subtitle: '教科書製作', cover: './image/article-7-cover.jpg', summary: '翰林教材的色彩管理標準、印刷演色表應用以及無障礙閱讀的配色建議。' },
    { id: 8, slug: 'article-8', title: '封面設計流程與注意事項', subtitle: '教科書製作', cover: './image/article-8-cover.jpg', summary: '從提案發想、設計審核、選紙到完稿送印的完整封面製作流程與重點檢核。' },
    { id: 9, slug: 'article-9-1', title: '著作權法及注意事項', subtitle: '基礎通識', cover: './image/article-9-cover.jpg', summary: '必須清楚說明著作權歸屬（如原創、改編、公有領域），以及文字、圖片的授權使用規範。' },
    { id: 10, slug: 'article-10', title: '合約簽署及稿費支付注意事項', subtitle: '基礎通識', cover: './image/article-10-cover.jpg', summary: '作者與外包人員的合約種類說明，以及請款流程、報稅憑證等行政作業細節。' },
    { id: 11, slug: 'article-3.4.11.12', title: '落版', subtitle: '教科書製作', cover: './image/article-11-cover.jpg', summary: '從手繪草稿到落版會議，確認圖文配置、閱讀動線與版面邏輯的關鍵步驟。' },
    { id: 12, slug: 'article-3.4.11.12', title: '發排', subtitle: '教科書製作', cover: './image/article-12-cover.jpg', summary: '稿件進入正式排版階段的流程，包含檔案交換格式、樣式設定與排版軟體協作。' },
    { id: 13, slug: 'article-13', title: '校對與看樣', subtitle: '教科書製作', cover: './image/article-13-cover.jpg', summary: '確保內容零錯誤的關鍵環節，包含紅字校對、數位樣確認與色樣核對重點。' },
    { id: 14, slug: 'article-14', title: '諮詢會議（多人會議或1對1訪談）', subtitle: '基礎通識', cover: './image/article-14-cover.jpg', summary: '諮詢會議目的，準備問題，挑選老師，如何主持等操作說明。' },
    { id: 15, slug: 'article-15.16', title: '電子書進稿流程及注意事項', subtitle: '教科書製作', cover: './image/article-15-cover.jpg', summary: '電子書、多媒體素材與線上題庫的製作規範與整合流程。' },
    { id: 16, slug: 'article-15.16', title: '國小實體書->電子書進稿流程及注意事項', subtitle: '教科書製作', cover: './image/article-16-cover.jpg', summary: '電子書、多媒體素材與線上題庫的製作規範與整合流程。' },
    { id: 17, slug: '', title: '題目入庫流程及注意事項', subtitle: '教科書製作', cover: './image/hero-bg.jpg', summary: '編輯如何提供行銷亮點、參與業務培訓並支援第一線推廣活動。' },
    { id: 18, slug: 'article-18', title: '課本呈現組成及相關製作流程', subtitle: '教科書製作', cover: './image/hero-bg.jpg', summary: '開單注意事項、特殊設計如附件、貼紙等，及相關流程與時程規劃。' },
    { id: 19, slug: 'article-19-1', title: '送製流程', subtitle: '教科書製作', cover: './image/hero-bg.jpg', summary: '送製流程及每個步驟的注意事項。' },
    { id: 20, slug: 'article-20', title: '成書檢核及異常回報', subtitle: '教科書製作', cover: './image/hero-bg.jpg', summary: '印刷顏色、用紙、內容有誤等異常處理方式。' },
    { id: 21, slug: 'article-21', title: '跑校注意事項', subtitle: '教科書市場服務', cover: './image/hero-bg.jpg', summary: '訪校準備、訪校方式與成果回饋的注意事項。' },
    { id: 22, slug: 'article-22', title: '教材說明會如何講', subtitle: '教科書市場服務', cover: './image/hero-bg.jpg', summary: '說明會規則、報告技巧與成果回饋。' },
    { id: 23, slug: 'article-23', title: '客訴處理流程及回覆注意事項', subtitle: '教科書市場服務', cover: './image/hero-bg.jpg', summary: '回應技巧與後續追蹤。' },
    { id: 24, slug: '', title: '市調問卷設計', subtitle: '基礎通識', cover: './image/hero-bg.jpg', summary: '市調問卷撰寫、合作與回收分析的注意事項。' }
];

// 提供給其他腳本使用
window.articles = articles;

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
                            <div>
                                <h3 class="text-base font-bold text-gray-900 mb-1 group-hover:text-hanlin-blue">${item.title}</h3>
                                <p class="text-xs text-gray-500">${item.summary || ''}</p>
                            </div>
                        </div>
                    </a>
                `).join('')}
            </div>
        </section>
    `).join('');
}

// 對外暴露，讓 partial 載入後可直接呼叫
window.renderSitemap = renderSitemap;

function renderHomeCards(items) {
    const grid = document.getElementById('articles-grid');
    if (!grid) return;
    const grouped = items.reduce((acc, item) => {
        const key = item.subtitle || '其他';
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});

    const renderCard = item => {
        const cover = item.cover || './image/hero-bg.jpg';
        return `
            <div class="article-card bg-white border border-gray-100 group relative flex flex-col h-full">
                <a href="./${item.slug}.html" class="block overflow-hidden rounded-t-xl">
                    <img src="${cover}" alt="${item.title}" class="w-full h-48 object-cover transform transition duration-300 group-hover:scale-105">
                </a>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-hanlin-blue transition duration-300">
                        <a href="./${item.slug}.html">${item.title}</a>
                    </h3>
                    <p class="text-gray-600 mb-4 line-clamp-3 flex-grow">${item.summary || ''}</p>
                    <div class="mt-auto pt-4">
                        <a href="./${item.slug}.html" class="inline-flex items-center text-hanlin-blue hover:opacity-80 font-medium group-hover:translate-x-1 transition-transform duration-300">
                            閱讀全文
                            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href') === '#articles') return;
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

function setupSitemapPanel() {
    const sitemapPanel = document.getElementById('sitemap-panel');
    const sitemapBackdrop = document.getElementById('sitemap-backdrop');
    const body = document.body;

    function openSitemap() {
        sitemapBackdrop.classList.remove('hidden');
        setTimeout(() => {
            sitemapBackdrop.classList.remove('opacity-0');
            sitemapPanel.classList.remove('translate-x-full');
        }, 10);
        body.style.overflow = 'hidden';
    }

    function closeSitemap() {
        sitemapPanel.classList.add('translate-x-full');
        sitemapBackdrop.classList.add('opacity-0');
        setTimeout(() => {
            sitemapBackdrop.classList.add('hidden');
            body.style.overflow = '';
        }, 300);
    }

    window.openSitemap = openSitemap;
    window.closeSitemap = closeSitemap;
}

function initSite() {
    setupNavigation();
    setupSitemapPanel();
    renderSitemap(articles);
    renderHomeCards(articles);
}

document.addEventListener('DOMContentLoaded', initSite);

// 提供給其他腳本使用
window.initSite = initSite;
