// Veri Modeli
const traders = [
    {
        name: "ERDEM",
        instagram: "gagtradesab",
        instaUrl: "https://www.instagram.com/gagtradesab",
        pfp: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/public/inputs/818f0a1c-9216-43f1-b3b3-0599c94b7999/b6348ef5-0453-4ca2-a38f-a9b0c74d6c62.png",
        games: ["#StealABrainrot", "#EscapeTsunamiForBrainrots", "#MurderMystery2"],
        proofs: 50,
        rank: "Usta Takasçı 💪"
    }
];

const mainContent = document.getElementById('mainContent');
const dropdownMenu = document.getElementById('dropdownMenu');

function toggleMenu() {
    dropdownMenu.classList.toggle('hidden');
}

// Menü dışına tıklandığında kapatma
window.onclick = function(event) {
    if (!event.target.matches('.fa-ellipsis-v') && !event.target.matches('button')) {
        dropdownMenu.classList.add('hidden');
    }
}

function navigateTo(page) {
    dropdownMenu.classList.add('hidden');
    window.scrollTo(0, 0);
    
    // Alt navigasyon butonlarını güncelle
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if(btn.dataset.page === page) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (page === 'home') renderHome();
    else if (page === 'traders') renderTraders();
    else if (page === 'requirements') renderRequirements();
}

function renderHome() {
    mainContent.innerHTML = `
        <div class="animate-fade-in space-y-12 text-center">
            <header class="py-10">
                <h1 class="text-5xl md:text-6xl font-black mb-4 custom-gradient-text italic uppercase">Hoşgeldiniz</h1>
                <div class="h-1.5 w-24 bg-green-500 mx-auto rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
            </header>
            <section class="glass-card p-8 rounded-[2rem] text-left relative overflow-hidden group">
                <div class="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                <p class="text-lg md:text-xl text-gray-400 leading-relaxed">
                    Burası roblox platformunda takas yapan kişilerin bulunduğu platformdur. 
                    Bu platform sayesinde kimle takas yapabileceğinizi kolayca öğrenebilirsiniz. 
                    Daha fazla bilgi almak için sağ üstteki üç noktaya tıklayın.
                </p>
            </section>
        </div>
    `;
}

function renderTraders() {
    let tradersHTML = `
        <div class="animate-fade-in">
            <h2 class="text-3xl font-black mb-8 flex items-center gap-3 italic uppercase text-white">
                <i class="fas fa-users text-green-500"></i> TAKASCILAR
            </h2>
    `;

    traders.forEach(t => {
        tradersHTML += `
            <div class="glass-card rounded-[2.5rem] border-2 border-green-500/20 overflow-hidden flex flex-col md:flex-row hover:border-green-500/40 transition-all duration-300 mb-6">
                <div class="md:w-56 bg-[#1f2329] flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/5">
                    <div class="relative">
                        <img src="${t.pfp}" class="w-36 h-36 rounded-full border-4 border-green-500 object-cover shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                        <div class="absolute -bottom-1 -right-1 bg-green-500 p-2 rounded-full ring-4 ring-[#1f2329]">
                            <i class="fas fa-check text-white text-[10px]"></i>
                        </div>
                    </div>
                </div>

                <div class="flex-1 p-8 space-y-5">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h3 class="text-3xl font-black text-white mb-1 uppercase tracking-tight">${t.name}</h3>
                            <a href="${t.instaUrl}" target="_blank" class="text-green-500 flex items-center gap-2 hover:text-green-400 text-xs font-bold bg-green-500/5 px-3 py-1 rounded-full w-fit transition-colors">
                                <i class="fab fa-instagram"></i> INSTAGRAM: @${t.instagram}
                            </a>
                        </div>
                        <div class="bg-green-500 text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-green-500/20">
                            ${t.rank}
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div class="bg-[#0f1115] p-4 rounded-2xl border border-white/5">
                            <div class="text-gray-500 text-[9px] font-black mb-2 flex items-center gap-2 uppercase tracking-widest">
                                <i class="fas fa-gamepad text-green-500"></i> TAKAS YAPTIGI OYUNLAR
                            </div>
                            <div class="flex flex-wrap gap-2">
                                ${t.games.map(game => `<span class="text-[10px] font-bold bg-white/5 px-2 py-1 rounded text-gray-300 border border-white/5">${game}</span>`).join('')}
                            </div>
                        </div>
                        <div class="bg-[#0f1115] p-4 rounded-2xl border border-white/5 flex flex-col justify-center">
                            <div class="text-gray-500 text-[9px] font-black mb-1 uppercase tracking-widest">PROOF SAYISI</div>
                            <div class="text-3xl font-black text-white tracking-tighter">${t.proofs}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    tradersHTML += `</div>`;
    mainContent.innerHTML = tradersHTML;
}

function renderRequirements() {
    mainContent.innerHTML = `
        <div class="animate-fade-in space-y-8">
            <h2 class="text-3xl font-black mb-2 flex items-center gap-3 italic text-white uppercase">
                <i class="fas fa-award text-green-500"></i> GEREKSİNİMLER
            </h2>

            <div class="bg-gradient-to-br from-green-500/10 to-[#1a1d23] p-8 rounded-[2.5rem] border border-green-500/20 shadow-2xl">
                <div class="flex items-center gap-5 mb-6">
                    <div class="bg-green-500 p-3 rounded-2xl shadow-lg shadow-green-500/30 text-black">
                        <i class="fab fa-instagram text-2xl"></i>
                    </div>
                    <div>
                        <p class="text-[10px] text-green-500 font-black uppercase tracking-widest">BAŞVURU HATTI</p>
                        <a href="https://www.instagram.com/kami1enel" target="_blank" class="text-2xl font-black text-white hover:text-green-500 transition-colors">@kami1enel</a>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="p-5 bg-white/5 rounded-2xl border border-white/5">
                        <p class="text-gray-200 font-bold mb-4 italic">Merhaba, sizi yeni açacağım çoğu takasçının bulunacağı sitemde yer almak istiyorum. Kabul ediyorsanız lütfen bunları eksiksiz yapın:</p>
                        <ul class="space-y-3 text-sm text-gray-400">
                            <li><span class="text-green-500 font-black">01.</span> Aktif olduğunuz tüm platformların linki (tiktok insta vb)</li>
                            <li><span class="text-green-500 font-black">02.</span> En büyük proof videonuzun linki</li>
                            <li><span class="text-green-500 font-black">03.</span> Aktif proof sayınız</li>
                            <li><span class="text-green-500 font-black">04.</span> Takas yaptığınız oyunlar</li>
                        </ul>
                    </div>

                    <div class="p-5 bg-green-500/10 rounded-2xl border border-green-500/20 text-center font-black text-green-400 text-lg italic shadow-inner">
                        “Eğer şartları kabul ediyorsanız üstteki instagramdan bana ulaşabilirsiniz.”
                    </div>

                    <div class="flex items-center gap-3 text-red-500 font-black text-[10px] uppercase tracking-wider bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                        <i class="fas fa-exclamation-triangle text-base"></i> SİTEYE EKLENMEK İÇİN EN AZ 15 PROOFUNUZUN OLMASI LAZIM.
                    </div>

                    <div class="bg-[#0f1115] p-6 rounded-3xl border border-white/5">
                        <h4 class="font-black text-white text-xl mb-4 border-b border-white/5 pb-3 italic uppercase">RÜTBELENDİRMELER</h4>
                        <div class="space-y-2">
                            <div class="flex justify-between items-center p-3 bg-white/5 rounded-xl text-xs hover:bg-white/10 transition-colors">
                                <span class="font-black text-green-500 uppercase">15 PROOF</span>
                                <span class="font-bold text-white uppercase italic">"Çaylak Takasçı" Rütbesi</span>
                            </div>
                            <div class="flex justify-between items-center p-3 bg-white/5 rounded-xl text-xs hover:bg-white/10 transition-colors">
                                <span class="font-black text-green-500 uppercase">35 PROOF</span>
                                <span class="font-bold text-white uppercase italic">"Bilge Takasçı" Rütbesi</span>
                            </div>
                            <div class="flex justify-between items-center p-3 bg-green-500/10 rounded-xl text-xs ring-1 ring-green-500/30">
                                <span class="font-black text-green-500 uppercase">50 PROOF</span>
                                <span class="font-bold text-green-400 uppercase italic">"Usta Takasçı" Rütbesi</span>
                            </div>
                            <div class="flex justify-between items-center p-3 bg-white/5 rounded-xl text-xs hover:bg-white/10 transition-colors">
                                <span class="font-black text-green-500 uppercase">85 PROOF</span>
                                <span class="font-bold text-white uppercase italic">"Efsane Takasçı" Rütbesi</span>
                            </div>
                            <div class="flex justify-between items-center p-3 bg-white/5 rounded-xl text-xs hover:bg-white/10 transition-colors">
                                <span class="font-black text-green-500 uppercase">100+ PROOF</span>
                                <span class="font-bold text-white uppercase italic">"Ölümsüz Takasçı" Rütbesi</span>
                            </div>
                        </div>
                    </div>

                    <div class="text-right">
                        <p class="text-green-500 font-black text-2xl italic tracking-tighter">- Shmirtz</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Başlangıç
navigateTo('home');

