/**
 * Ads Manager - Skrip Pengelola Unit Iklan
 * Skrip ini menyediakan fungsi untuk merender elemen iklan pada posisi yang ditentukan.
 */

// Konfigurasi parameter untuk setiap ukuran iklan
const ADS_CONFIG = {
    '320x50': {
        key: '113942e911746c421f6b5497bf65a2c6',
        format: 'iframe',
        height: 50,
        width: 320,
        src: 'https://buffcasualwhine.com/113942e911746c421f6b5497bf65a2c6/invoke.js'
    },
    '468x60': {
        key: 'ee6fbbaee01d7a12aeeb5d58f3126e1f',
        format: 'iframe',
        height: 60,
        width: 468,
        src: 'https://buffcasualwhine.com/ee6fbbaee01d7a12aeeb5d58f3126e1f/invoke.js'
    },
    '160x300': {
        key: '328472b6f3804a37481a66024bd30649',
        format: 'iframe',
        height: 300,
        width: 160,
        src: 'https://buffcasualwhine.com/328472b6f3804a37481a66024bd30649/invoke.js'
    },
    '728x90': {
        key: '2d751854ce36e13fefddaa58f93251e2',
        format: 'iframe',
        height: 90,
        width: 728,
        src: 'https://buffcasualwhine.com/2d751854ce36e13fefddaa58f93251e2/invoke.js'
    },
    '300x250': {
        key: '53541ca00eed825e8c431c12f7418ac0',
        format: 'iframe',
        height: 250,
        width: 300,
        src: 'https://buffcasualwhine.com/53541ca00eed825e8c431c12f7418ac0/invoke.js'
    }
};

/**
 * Fungsi untuk menampilkan iklan berdasarkan ukuran ke dalam elemen target tertentu
 * @param {string} size - Ukuran iklan (contoh: '320x50', '468x60')
 * @param {string} elementId - ID dari elemen HTML tempat iklan akan dipasang
 */
function muatIklan(size, elementId) {
    const targetElement = document.getElementById(elementId);
    if (!targetElement) {
        console.error(`Elemen dengan ID "${elementId}" tidak ditemukan.`);
        return;
    }

    const config = ADS_CONFIG[size];
    if (!config) {
        console.error(`Konfigurasi untuk ukuran iklan "${size}" tidak ditemukan.`);
        return;
    }

    // Membuat kontainer unik untuk skrip opsi atOptions iklan
    const scriptOptions = document.createElement('script');
    scriptOptions.type = 'text/javascript';
    scriptOptions.text = `
        atOptions = {
            'key' : '${config.key}',
            'format' : '${config.format}',
            'height' : ${config.height},
            'width' : ${config.width},
            'params' : {}
        };
    `;

    // Membuat elemen skrip utama penyedia iklan
    const scriptLoader = document.createElement('script');
    scriptLoader.type = 'text/javascript';
    scriptLoader.src = config.src;

    // Memasukkan skrip ke dalam elemen target di halaman
    targetElement.appendChild(scriptOptions);
    targetElement.appendChild(scriptLoader);
}
