/**
 * Ads Injection Script
 * Menyisipkan seluruh susunan banner iklan ke posisi paling atas dan paling bawah secara dinamis.
 */

(function() {
    // 1. Membuat Container untuk posisi ATAS
    var topContainer = document.createElement('div');
    topContainer.id = 'ads-top-placement';
    topContainer.style.cssText = 'width: 100%; text-align: center; margin: 10px 0; display: block;';

    // 2. Membuat Container untuk posisi BAWAH
    var bottomContainer = document.createElement('div');
    bottomContainer.id = 'ads-bottom-placement';
    bottomContainer.style.cssText = 'width: 100%; text-align: center; margin: 10px 0; display: block;';

    // Fungsi pembantu untuk merender struktur elemen iklan pihak ketiga secara aman
    function createAdBlock(key, width, height) {
        var wrapper = document.createElement('div');
        wrapper.style.cssText = 'display: inline-block; margin: 5px; width: ' + width + 'px; height: ' + height + 'px;';
        
        var scriptOptions = document.createElement('script');
        scriptOptions.type = 'text/javascript';
        scriptOptions.text = 'atOptions = { "key" : "' + key + '", "format" : "iframe", "height" : ' + height + ', "width" : ' + width + ', "params" : {} };';
        
        var scriptInvoke = document.createElement('script');
        scriptInvoke.type = 'text/javascript';
        scriptInvoke.src = 'https://buffcasualwhine.com/' + key + '/invoke.js';
        
        wrapper.appendChild(scriptOptions);
        wrapper.appendChild(scriptInvoke);
        return wrapper;
    }

    // ==========================================
    // SUSUNAN IKLAN POSISI ATAS
    // ==========================================
    // Banner 728x90 (Pasang di atas)
    topContainer.appendChild(createAdBlock('2d751854ce36e13fefddaa58f93251e2', 728, 90));
    
    // Banner 320x50 (Pasang di posisi paling atas - 2 Buah)
    topContainer.appendChild(createAdBlock('113942e911746c421f6b5497bf65a2c6', 320, 50));
    topContainer.appendChild(createAdBlock('113942e911746c421f6b5497bf65a2c6', 320, 50));
    
    // Banner 468x60 (Pasang di atas juga - 2 Buah)
    topContainer.appendChild(createAdBlock('ee6fbbaee01d7a12aeeb5d58f3126e1f', 468, 60));
    topContainer.appendChild(createAdBlock('ee6fbbaee01d7a12aeeb5d58f3126e1f', 468, 60));

    // ==========================================
    // SUSUNAN IKLAN POSISI BAWAH
    // ==========================================
    // Banner 160x300 (Pasang di paling bawah - 2 Buah)
    bottomContainer.appendChild(createAdBlock('328472b6f3804a37481a66024bd30649', 160, 300));
    bottomContainer.appendChild(createAdBlock('328472b6f3804a37481a66024bd30649', 160, 300));
    
    // Banner 300x250 (Pasang di paling bawah - 1 Buah)
    bottomContainer.appendChild(createAdBlock('53541ca00eed825e8c431c12f7418ac0', 300, 250));

    // Proses injeksi ke dalam halaman web
    function runInjection() {
        if (document.body) {
            // Memasukkan kontainer atas ke bagian paling pertama di dalam tag <body>
            document.body.insertBefore(topContainer, document.body.firstChild);
            // Memasukkan kontainer bawah ke bagian paling akhir sebelum penutup tag </body>
            document.body.appendChild(bottomContainer);
        } else {
            setTimeout(runInjection, 50);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runInjection);
    } else {
        runInjection();
    }
})();
