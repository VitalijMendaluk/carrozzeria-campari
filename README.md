# Carrozzeria Campari — сайт

Преміальний сайт для Carrozzeria Campari (Pogliano Milanese, Італія).
Чистий HTML + CSS + JavaScript, без фреймворків і збірки — готовий до деплою як є.

## Структура

```
carrozzeria-campari/
├── index.html        # Головна (onepage з якірною навігацією)
├── fast-boll.html    # Fast Boll 95® — патент і курси
├── storia.html       # La Nostra Storia — таймлайн
├── css/style.css     # Усі стилі (критичний CSS — інлайном у <head> кожної сторінки)
├── js/main.js        # Уся логіка (модалка, лічильники, слайдер, cookie, карта)
└── images/           # Фото (оригінальні імена зі старого сайту)
```

## Як залити на GitHub + Vercel

1. **GitHub:** створіть новий репозиторій → перетягніть усю папку `carrozzeria-campari`
   у вікно «uploading an existing file» (або через термінал):
   ```bash
   cd carrozzeria-campari
   git init && git add . && git commit -m "Sito Carrozzeria Campari"
   git remote add origin https://github.com/ВАШ_ЛОГІН/carrozzeria-campari.git
   git push -u origin main
   ```
2. **Vercel:** [vercel.com](https://vercel.com) → **Add New → Project** → імпортуйте репозиторій.
   Framework Preset: **Other**. Build Command і Output Directory залишити порожніми —
   це статичний сайт, нічого збирати не треба. → **Deploy**.

Альтернатива без GitHub: `npx vercel` прямо з папки проєкту.

## Як підключити реальну відправку форми

Зараз форма працює через **mailto:** — відкриває поштовий клієнт відвідувача
з готовим листом на `carrozzeria.campari@libero.it`.

Щоб листи надходили напряму (рекомендовано):

1. Відкрийте `js/main.js`, знайдіть функцію `sendForm` (розділ **7. ВАЛІДАЦІЯ ФОРМ**).
2. Закоментуйте блок «ВАРІАНТ A (mailto)».
3. Розкоментуйте блок «ВАРІАНТ B (fetch)».
4. Замініть `YOUR_ENDPOINT` на свій endpoint. Найпростіше — безкоштовний
   [FormSubmit](https://formsubmit.co):
   ```
   https://formsubmit.co/ajax/carrozzeria.campari@libero.it
   ```
   Після першої відправки FormSubmit надішле на цю пошту лист підтвердження —
   перейдіть за посиланням у ньому, і форма запрацює.

## Що ще варто зробити перед запуском

- **P.IVA:** у футері всіх трьох сторінок замініть `00000000000` на реальний номер.
- **Privacy / Cookie Policy:** лінки в футері, формах і cookie-банері ведуть на `#` —
  додайте реальні сторінки політик (вимога GDPR).
- **WebP:** фото зараз у JPG (≤1024px). Для прискорення можна згенерувати WebP
  (`brew install webp`, потім `for f in images/*.jpg; do cwebp -q 80 "$f" -o "${f%.jpg}.webp"; done`)
  і обгорнути `<img>` у `<picture>` з webp-source.
- **Домен:** після деплою на Vercel прив'яжіть `carrozzeriacampari.it`
  у Settings → Domains.

## Двомовність (IT / EN)

- Сайт двомовний: **італійська за замовчуванням**, перемикач **IT/EN** у хедері (і в бургер-меню на мобільному).
- Переклади лежать у `js/main.js` — об'єкт `I18N` з ключами `it` та `en`. Текст у HTML позначений атрибутом `data-i18n="ключ"`.
- Вибір мови зберігається в `localStorage` (`campari-lang`) і застосовується миттєво, без перезавантаження.
- Щоб виправити будь-який текст — знайдіть ключ у `I18N` і відредагуйте обидві мови.

## Дизайн

- Типографіка у стилі Lamborghini: шрифт **Archivo**, великі заголовки великими літерами.
- Палітра: глибокий чорний + **золото** + **хром/метал** (металеві градієнти на цифрах і заголовках) + панелі **матового скла (Liquid Glass)**.
- Головний банер — Ferrari 488 Spider (`images/Carrozzeria-Campari-Carrozzeria.jpg`), банер Fast Boll — Ferrari 12Cilindri (`images/Ferrari-12Cilindri.webp`). Щоб замінити — покладіть свій файл під тим самим іменем.
- Соцмережі у футері: WhatsApp, Tumblr, Email — замініть посилання на свої.

## Технічні нотатки

- Google-карта вантажиться **лише після згоди на cookie** (GDPR) — банер унизу.
  Згода зберігається в `localStorage` під ключем `campari-cookies`.
- Усі анімації — тільки `transform`/`opacity`, поважається `prefers-reduced-motion`.
- SEO: унікальні title/description, Open Graph (+ `alternate` локаль EN), JSON-LD `AutoBodyShop`. Заголовок сторінок перемикається разом із мовою.
