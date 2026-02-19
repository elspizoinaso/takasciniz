const tradersData = [
    {
        name: "Erdem",
        instagram: "gagtradesab",
        instaUrl: "https://www.instagram.com/gagtradesab",
        pfp: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/public/inputs/818f0a1c-9216-43f1-b3b3-0599c94b7999/b6348ef5-0453-4ca2-a38f-a9b0c74d6c62.png",
        games: ["#StealABrainrot", "#EscapeTsunamiForBrainrots", "#MurderMystery2"],
        proofs: 50,
        rank: "Usta Takasçı 💪"
    }
];

const contentDiv = document.getElementById('content');
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// Menü Kontrolü
menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

// Sayfa Değiştirme
function navigateTo(page) {
    dropdownMenu.classList.add('hidden');
    window.scrollTo(0, 0);
    
    // Aktif butonu güncelle
    document.querySelectorAll('.nav-link').forEach(link => {
        if(link.dataset.page === page) link.classList.add('active');
        else link.classList.remove('active');
    });

    if (page === 'home') renderHome();
    else if (page === 'traders') renderTraders();
    else if (page === 'requirements') renderRequirements();
}

function renderHome() {
    contentDiv.innerHTML = `
        <div class="animate-up">
            <div class="home-header">
                <h1>Hoşgeldiniz</h1>
                <div class="line" style="height:4px; width:80px; background:var(--green); margin:15px auto; border-radius:10px;"></div>
            </div>
            <div class="welcome-card">
                <p>Burası roblox platformunda takas yapan kişilerin bulunduğu platformdur. 
                Bu platform sayesinde kimle takas yapabileceğinizi kolayca öğrenebilirsiniz. 
                Daha fazla bilgi almak için sağ üstteki üç noktaya tıklayın.</p>
            </div>
        </div>
    `;
}

function renderTraders() {
    let tradersHtml = `<h2 class="page-title italic font-black" style="margin-bottom:30px;"><i class="fas fa-users text-green"></i> TAKASCILAR</h2>`;
    
    tradersData.forEach(t => {
        tradersHtml += `
            <div class="trader-card">
                <div class="trader-pfp-box">
                    <img src="${t.pfp}" class="pfp-img">
                    <div class="verified-badge"><i class="fas fa-check"></i></div>
                </div>
                <div class="trader-info">
                    <div class="rank-badge">${t.rank}</div>
                    <h3 class="trader-name">${t.name}</h3>
                    <a href="${t.instaUrl}" target="_blank" class="trader-insta">
                        <i class="fab fa-instagram"></i> INSTAGRAM: @${t.instagram}
                    </a>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">TAKAS YAPTIGI OYUNLAR</div>
                            <div style="font-size:10px; color:#ccc;">${t.games.join(' ')}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">PROOF SAYISI</div>
                            <div style="font-size:24px; font-weight:900;">${t.proofs}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    contentDiv.innerHTML = tradersHtml;
}

function renderRequirements() {
    contentDiv.innerHTML = `
        <div class="req-container">
            <div class="insta-header">
                <div class="insta-icon-box"><i class="fab fa-instagram fa-2x"></i></div>
                <div>
                    <div style="font-size:10px; font-weight:900; color:var(--green); letter-spacing:2px;">BAŞVURU HATTI</div>
                    <a href="https://www.instagram.com/kami1enel" target="_blank" style="color:white; text-decoration:none; font-size:24px; font-weight:900;">@kami1enel</a>
                </div>
            </div>
            
            <p style="font-weight:bold; margin-bottom:20px;">Merhaba, sizi yeni açacağım çoğu takasçının bulunacağı sitemde yer almak istiyorum. Kabul ediyorsanız lütfen bunları eksiksiz yapın:</p>
            
            <ul style="list-style:none; color:var(--text-gray); font-size:14px; margin-bottom:25px;">
                <li style="margin-bottom:10px;"><span class="text-green">•</span> Aktif olduğunuz tüm platformların linki (tiktok insta vb)</li>
                <li style="margin-bottom:10px;"><span class="text-green">•</span> En büyük proof videonuzun linki</li>
                <li style="margin-bottom:10px;"><span class="text-green">•</span> Aktif proof sayınız</li>
                <li style="margin-bottom:10px;"><span class="text-green">•</span> Takas yaptığınız oyunlar</li>
            </ul>

            <div style="background:rgba(34, 197, 94, 0.1); padding:20px; border-radius:15px; text-align:center; font-weight:900; font-style:italic; border:1px solid rgba(34,197,94,0.2);">
                “Eğer şartları kabul ediyorsanız üstteki instagramdan bana ulaşabilirsiniz.”
            </div>

            <div class="alert-box"><i class="fas fa-exclamation-triangle"></i> Siteye eklenmek için en az 15 proofunuzun olması lazım.</div>

            <div class="rank-list">
                <h4 style="font-weight:900; font-style:italic; margin-bottom:15px; border-bottom:1px solid #333; padding-bottom:10px;">RÜTBELENDİRMELER</h4>
                <div class="rank-row"><span>15 Proof</span><span>"Çaylak Takasçı" Rütbesi</span></div>
                <div class="rank-row"><span>35 Proof</span><span>"Bilge Takasçı" Rütbesi</span></div>
                <div class="rank-row"><span>50 Proof</span><span>"Usta Takasçı" Rütbesi</span></div>
                <div class="rank-row"><span>85 Proof</span><span>"Efsane Takasçı" Rütbesi</span></div>
                <div class="rank-row" style="border:none;"><span>100+ Proof</span><span>"Ölümsüz Takasçı" Rütbesi</span></div>
            </div>

            <div class="final-shmirtz" style="margin-top:20px;">- Shmirtz</div>
        </div>
    `;
}

// Navigasyon Olay Dinleyicileri
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.dataset.page);
    });
});

// İlk açılış
window.onload = () => renderHome();

