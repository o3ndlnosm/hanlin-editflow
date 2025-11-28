// 翰林北研 - 全站共用設定檔
// 這裡設定的顏色，全站的 Tailwind CSS 都可以讀取到

tailwind.config = {
    theme: {
        extend: {
            colors: {
                hanlin: {
                    blue: '#005CA1',   // 主色：深藍
                    gold: '#BDB07B',   // 輔色：金色
                    sky: '#54C3F1',    // 點綴：天藍
                    pale: '#EBF4FF',   // 背景：淺藍底
                }
            }
        }
    }
}