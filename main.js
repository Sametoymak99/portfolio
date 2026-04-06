// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Reveal hero elements on load
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 0.8s cubic-bezier(0, 0, 0.2, 1)';
        }, index * 200);
    });

    // Rock-solid Typing Effect for Hero Description
    const heroP = document.getElementById('hero-desc');
    if (heroP) {
        const fullText = heroP.textContent.trim();
        heroP.textContent = '';
        let index = 0;
        
        function drawNextChar() {
            if (index <= fullText.length) {
                heroP.textContent = fullText.substring(0, index);
                index++;
                setTimeout(drawNextChar, 18);
            }
        }
        
        // Minor delay to start after reveal animations
        setTimeout(drawNextChar, 1200);
    }

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeBtn.innerText = document.body.classList.contains('light-theme') ? '☀️' : '🌓';
    });
});

// Project Details Data
const projectDetails = {
    'route-planner': {
        title: 'Akıllı Şehir Rota Planlayıcı',
        content: `
            <p style="margin-bottom:1rem;">Bu proje, şehir içi toplu taşıma ve araç trafiğini optimize etmek için geliştirildi. Graflar ve modern arama algoritmaları (A*, Dijkstra) kullanılarak en hızlı ve en verimli rotayı hesaplar.</p>
            <h4 style="margin-bottom:0.5rem; color:var(--primary);">Teknik Özellikler:</h4>
            <ul style="padding-left:1.5rem; color:var(--text-muted);">
                <li>Gerçek zamanlı trafik verisi işleme (Simüle edilmiş)</li>
                <li>Düşük gecikmeli yol bulma algoritmaları</li>
                <li>Python tabanlı backend ve CLI arayüzü</li>
            </ul>
            <a href="https://github.com/Sametoymak99/AKILLI-EH-R-ROTA-PLANLAYICI" target="_blank" class="btn btn-primary" style="margin-top:2rem;">GitHub'da İncele</a>
        `
    },
    'data-analysis': {
        title: 'Veri Analizi Kütüphanesi',
        content: `
            <p style="margin-bottom:1rem;">Veri bilimi dünyasında, ham veriyi anlamlı bilgilere dönüştürmek en kritik adımdır. Bu kütüphane, Pandas ve NumPy kullanarak veri ön işleme süreçlerini hızlandırır.</p>
            <h4 style="margin-bottom:0.5rem; color:var(--primary);">Kullanılan Teknolojiler:</h4>
            <ul style="padding-left:1.5rem; color:var(--text-muted);">
                <li>Pandas: Veri yapıları ve manipülasyon</li>
                <li>Matplotlib: Veri görselleştirme</li>
                <li>Seaborn: İstatiksel analiz grafikleri</li>
            </ul>
            <p style="margin-top:1rem; color:var(--text-muted);">Proje, veri temizleme ve keşifçi veri analizi (EDA) süreçlerini otomatize etmeyi hedefler.</p>
            <a href="https://github.com/Sametoymak99/data_analysis" target="_blank" class="btn btn-primary" style="margin-top:2rem;">GitHub'da İncele</a>
        `
    },
    'dsa': {
        title: 'DSA Implementations',
        content: `
            <p style="margin-bottom:1rem;">Algoritmalar yazılımın kalbidir. Bu repo, Java dilinde veri yapıları ve algoritmaların en efektif hallerini içerir.</p>
            <h4 style="margin-bottom:0.5rem; color:var(--primary);">İçerik:</h4>
            <ul style="padding-left:1.5rem; color:var(--text-muted);">
                <li>Sorting: Quicksort, Mergesort, TimSort</li>
                <li>Graphs: BFS, DFS, MST Algoritmaları</li>
                <li>Trees: AVL Tree, Red-Black Tree</li>
                <li>Dynamic Programming Examples</li>
            </ul>
            <a href="https://github.com/Sametoymak99/Data-Structures-and-Algorithm" target="_blank" class="btn btn-primary" style="margin-top:2rem;">GitHub'da İncele</a>
        `
    },
    // Blog Posts
    'blog-perf': {
        title: 'Yazılımda Performans: Altın Kuralları',
        content: `
            <p style="margin-bottom:1rem;">Performans odaklı kod yazmak sadece hızı değil, kaynak tüketimini ve ölçeklenebilirliği de doğrudan etkiler. İşte bilgisayar mühendisliği temellerinden süzülen 3 ana kural:</p>
            <h4 style="margin-bottom:0.8rem; color:var(--primary);">1. Zaman Karmaşıklığını (Time Complexity) Yönetin</h4>
            <p style="margin-bottom:1rem; color:var(--text-muted);">O(n²) olan bir döngüyü O(nlogn) derecesine indirmek, veri setiniz büyüdüğünde saniyeler yerine milisaniyeler kazanmanızı sağlar.</p>
            <h4 style="margin-bottom:0.8rem; color:var(--primary);">2. Bellek Hiyerarşisine Saygı Duyun</h4>
            <p style="margin-bottom:1rem; color:var(--text-muted);">L1/L2 cache dostu veri yapıları kullanmak, modern işlemcilerde performansın anahtarıdır.</p>
            <h4 style="margin-bottom:0.8rem; color:var(--primary);">3. Profiling Araçlarını Kullanın</h4>
            <p style="margin-bottom:1rem; color:var(--text-muted);">Tahmin etmek yerine ölçün. Python'da <code>cProfile</code>, Java'da <code>VisualVM</code> veya sistem seviyesinde <code>perf</code> gibi araçlar darboğazları (bottlenecks) bulmanıza yardımcı olur.</p>
        `
    },
    'blog-data': {
        title: 'Veri Analizi Neden Önemlidir?',
        content: `
            <p style="margin-bottom:1.5rem;">Günümüz dünyasında veri, yeni petroldür. Ancak işlenmemiş veri bir yükten başka bir şey değildir. Bu yüzden her geliştiricinin temel veri analitik yeteneklerine sahip olması gerekir.</p>
            <p style="margin-bottom:1rem; color:var(--text-muted);">Veri analizi, sezgiler yerine veriye dayalı kararlar almamızı sağlar. Bir Yapay Zeka Geliştiricisi olarak, model kurmadan önce verinin karakteristiğini (outliers, skewness, bias) anlamanın yolunun titiz bir analizden geçtiğini biliyorum.</p>
            <p style="color:var(--text-muted);">Python'ın Pandas ve NumPy ekosistemi bu kütüphanelerin sunduğu vektörize işlemler sayesinde milyarlarca satır veriyi saniyeler içinde anlamlandırmamıza olanak tanır.</p>
        `
    }
};

// Modal Logic
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

function openDetails(id) {
    const project = projectDetails[id];
    if (project) {
        modalBody.innerHTML = `
            <h2 style="margin-bottom:1.5rem; font-size: 2rem; border-bottom: 2px solid var(--primary); display:inline-block;">${project.title}</h2>
            <div style="font-size: 1.1rem; line-height: 1.8;">${project.content}</div>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeDetails() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeDetails();
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Parallax effect for cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        
        const dx = (x - xc) / (rect.width / 10);
        const dy = (y - yc) / (rect.height / 10);
        
        card.style.transform = `perspective(1000px) rotateX(${-dy}deg) rotateY(${dx}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
});
