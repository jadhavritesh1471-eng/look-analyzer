// Response Database with rich English fashion words & unique stickers
function generateReview(gender, theme, isGood) {
    const verdictTag = document.getElementById('verdictTag');
    const mainComment = document.getElementById('mainComment');
    const detailsText = document.getElementById('detailsText');
    const adviceBox = document.getElementById('adviceBox');
    const adviceText = document.getElementById('adviceText');
    const stickerBadge = document.getElementById('stickerBadge'); // 🆕

    if (gender === 'girl') {
        if (isGood) {
            stickerBadge.innerHTML = "👑 <span class='glow-text'>SLAY QUEEN</span>"; // 🆕 Unique Sticker
            verdictTag.style.backgroundColor = '#2e7d32'; verdictTag.innerText = '🔥 Drop-Dead Gorgeous!';
            mainComment.innerText = 'You look absolutely stunning and beautiful! Ekdam laakhaat ek face... your vibe is completely unmatched! 😍';
            detailsText.innerHTML = 'Your jewelry choices are extremely elegant and aesthetically pleasing. Te galyatla ani kantala is looking so delicate, perfectly matching your outfit color tone! The premium golden border of the saree is creating an elite contrast with those red bangles on your red blouse. Aur is poore flawless look ko completely next level par le gaya hai aapka <b>Gajra</b>!';
            adviceBox.classList.add('hidden');
        } else {
            stickerBadge.innerHTML = "👀 <span class='glow-text'>NEEDS VIBES</span>"; // 🆕 Unique Sticker
            verdictTag.style.backgroundColor = '#c62828'; verdictTag.innerText = '💡 Quick Style Transformation Needed';
            mainComment.innerText = 'The look is sweet, but it needs a little bit of glamour to stand out! 🤔';
            detailsText.innerHTML = 'The overall color coordination feels a bit cluttered. Blouse ka color pattern saree ke border se properly match nahi ho raha hai, and heavy design ki wajah से neck area is looking too crowded instead of looking neat.';
            adviceBox.classList.remove('hidden');
            adviceText.innerText = 'Try using a premium nude or lighter lipstick shade for this theme. Instead of a heavy necklace, just wear a delicate chain and pair it with big statement earrings, look bilkul attractive aur khul ke dikhega!';
        }
    } else { // For Boys
        if (isGood) {
            stickerBadge.innerHTML = "💎 <span class='glow-text'>PURE DAPPER</span>"; // 🆕 Unique Sticker
            verdictTag.style.backgroundColor = '#1565c0'; verdictTag.innerText = '😎 Incredibly Dashing & Dapper!';
            mainComment.innerText = 'Ekdam kadak look, bhai! Full on main character energy... total sharp and handsome vibe! 👑';
            detailsText.innerHTML = 'The premium collar structure and fitting of your shirt/kurta is absolutely on point. Well-groomed beard style and clean hair cut aapke face structure ko perfectly complement kar rahe hain. That classy premium watch in hand and your confident posture makes this look completely unbeatable!';
            adviceBox.classList.add('hidden');
        } else {
            stickerBadge.innerHTML = "🚨 <span class='glow-text'>STYLE CRIME</span>"; // 🆕 Unique Sticker
            verdictTag.style.backgroundColor = '#c62828'; verdictTag.innerText = '💡 Fashion Alert!';
            mainComment.innerText = 'Outfit combination could be slightly more polished, bhau! 🙄';
            detailsText.innerHTML = 'Shirt aur pants ke color ka contrast properly balance nahi ho paa raha hai to look premium. Also, the messy, unstyled hair is taking away from the otherwise sharp structure of your overall personality.';
            adviceBox.classList.remove('hidden');
            adviceText.innerText = 'Try unbuttoning the top shirt button and wear a sleek metal chain or premium sunglasses. Focus on darker shirts with lighter pants, settle your hair properly with some gel, and you will look absolutely stellar!';
        }
    }
}
