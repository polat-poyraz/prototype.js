# Prototype.js

Prototype.js ile prototipleriniz daha rahat yazın.
Prototip yazarken yeni html dosyaları açıp tek tek girip çıkmakla uğraşmayın,
Prototip.js ile tek sayfa üzerinden tüm prototiplerinize anında ulaşın.

Kullanımı ve dosya yapısı başlatdığınız'da karşınıza çıkmaktadır.

## Dosya yapısı

```
|--public
    |--first.html  
|--styles
    |--index.css  
|--assets
    |--sample.jpg  
|--components 
    |--first-page-component.js  
```

## Component

components dosyasında basit componentlerimizi tutarız.
component kullanmak istediğinizde component kullanacağınız html dosyasına
prototypeComponent.js yi bağlayın.

```html
<script src='../lib/prototypeComponent.js'></script>
<script src='../components/kullanılacak-bileşen'></script>
```

# Tutorial

Bir component yazıp onu first.html dosyasında kullanalım.
ilk önce components dosyasına first.js dosyası açalım ve şunları yazalım.

> first.js

```javascript
// prototypeComponent.js dosyasından gelen componentUse() fonksiyonu.
componentUse(() => {
    const title = 'First Component'

    // Her componentsUse kullanımında bir callback fonksiyon html kodlarını return etmelidir.
    // html kodları return edilirken `` tırnak kullanılmalıdır.
    return (`
        <h1 class="first-component">
            ${title}
        </h1>
        <style>
            .first-component {
                background: black;
                color: white;
                text-align: center;
                padding: 1em;
                margin-bottom: 2em;
            }
        </style>
    `)
}, '#first-component' /* Componenti hangi isim ile kullanılacağı yazılır.
eğer id ise # class ise . olarak türü belirtilmelidir */)
```

Yazdığımız componenti kullanabilmek için veriğimiz id ismini kullanıyoruz.
> id veya class kullanılabilir.

> first.html

``` html
<body>
    <div id="first-component"></div>
</body>
<script src='../lib/prototypeComponent.js'></script>
<script src='../components/first.js'></script>
```