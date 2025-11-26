const articles = [
    { id: 1, slug: 'article-1', title: '一本課本從研發到學生手上的過程', subtitle: '關於翰林', cover: './image/article-1-cover.jpg', summary: '認識翰林集團架構與教科書完整研發流程。' },
    { id: 2, slug: 'article-2', title: '教科書新編及修改送審流程', subtitle: '基礎通識', cover: './image/article-2-cover.jpg', summary: '審查法規重點說明與異常案例處置教學。' },
    { id: 3, slug: '', title: '編撰會議（及開會技巧）', subtitle: '基礎通識', cover: './image/article-3-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 4, slug: '', title: '美術設計討論', subtitle: '教科書製作', cover: './image/article-4-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 5, slug: '', title: '拍照邀約及注意事項', subtitle: '教科書製作', cover: './image/article-5-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 6, slug: '', title: '發插畫注意事項', subtitle: '教科書製作', cover: './image/article-6-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 7, slug: '', title: '用色規範', subtitle: '教科書製作', cover: './image/article-7-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 8, slug: '', title: '封面設計流程與注意事項', subtitle: '教科書製作', cover: './image/article-8-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 9, slug: '', title: '著作權法及注意事項', subtitle: '基礎通識', cover: './image/article-9-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 10, slug: '', title: '內容授權流程（文、圖、照片）', subtitle: '基礎通識', cover: './image/article-10-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 11, slug: '', title: '版面規劃與整稿技巧（含閱讀順序）', subtitle: '教科書製作', cover: './image/article-11-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 12, slug: '', title: '特殊亮點頁面設計策略', subtitle: '教科書製作', cover: './image/article-12-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 13, slug: '', title: '校對規範及流程', subtitle: '教科書製作', cover: './image/article-13-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 14, slug: '', title: '諮詢會議（多人會議或1對1訪談）', subtitle: '基礎通識', cover: './image/article-14-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 15, slug: '', title: '國中實體書->電子書進稿流程及注意事項', subtitle: '教科書製作', cover: './image/article-15-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 16, slug: '', title: '國小實體書->電子書進稿流程及注意事項', subtitle: '教科書製作', cover: './image/article-16-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 18, slug: '', title: '課本呈現組成及相關製作流程', subtitle: '教科書製作', cover: './image/article-18-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 19, slug: '', title: '送製流程', subtitle: '教科書製作', cover: './image/article-19-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 20, slug: '', title: '成書檢核及異常回報', subtitle: '教科書製作', cover: './image/article-20-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 21, slug: '', title: '跑校注意事項', subtitle: '教科書市場服務', cover: './image/article-21-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 22, slug: '', title: '教材說明會如何講', subtitle: '教科書市場服務', cover: './image/article-22-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 23, slug: '', title: '客訴處理流程及回覆注意事項', subtitle: '教科書市場服務', cover: './image/article-23-cover.jpg', summary: '尚未開放，敬請期待' },
    { id: 24, slug: '', title: '市調問卷設計', subtitle: '基礎通識', cover: './image/article-24-cover.jpg', summary: '尚未開放，敬請期待' }
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
