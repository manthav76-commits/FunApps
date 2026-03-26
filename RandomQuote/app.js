const quotes = [
  {
    text: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    author: "Albert Einstein",
    title: "Theoretical Physicist",
    wiki: "Albert_Einstein"
  },
  {
    text: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
    title: "Poet & Civil Rights Activist",
    wiki: "Maya_Angelou"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    title: "Former President of South Africa",
    wiki: "Nelson_Mandela"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    title: "Co-founder of Apple",
    wiki: "Steve_Jobs"
  },
  {
    text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King Jr.",
    title: "Civil Rights Leader",
    wiki: "Martin_Luther_King_Jr."
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    title: "Former Prime Minister of the UK",
    wiki: "Winston_Churchill"
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    title: "Leader of Indian Independence",
    wiki: "Mahatma_Gandhi"
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
    title: "Inventor & Businessman",
    wiki: "Thomas_Edison"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    title: "Theoretical Physicist",
    wiki: "Albert_Einstein"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    title: "Former First Lady of the United States",
    wiki: "Eleanor_Roosevelt"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    title: "Chinese Philosopher",
    wiki: "Confucius"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    title: "Musician & Songwriter",
    wiki: "John_Lennon"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    title: "Former President of South Africa",
    wiki: "Nelson_Mandela"
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
    title: "Catholic Nun & Missionary",
    wiki: "Mother_Teresa"
  },
  {
    text: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt",
    title: "32nd President of the United States",
    wiki: "Franklin_D._Roosevelt"
  },
  {
    text: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead",
    title: "Cultural Anthropologist",
    wiki: "Margaret_Mead"
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
    title: "Philosopher & Essayist",
    wiki: "Ralph_Waldo_Emerson"
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
    title: "Actress & Playwright",
    wiki: "Mae_West"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
    title: "Poet",
    wiki: "Robert_Frost"
  },
  {
    text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
    title: "Media Executive & Philanthropist",
    wiki: "Oprah_Winfrey"
  }
];

const imageCache = {};
let currentIndex = 0;
let indices = shuffleIndices();

const card = document.getElementById('card');
const quoteText = document.getElementById('quote-text');
const authorName = document.getElementById('author-name');
const authorTitle = document.getElementById('author-title');
const authorImg = document.getElementById('author-img');
const authorPlaceholder = document.getElementById('author-placeholder');
const dotRow = document.getElementById('dot-row');

// Build dot indicators
const DOT_COUNT = 5;
for (let i = 0; i < DOT_COUNT; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => advance());
  dotRow.appendChild(dot);
}

function shuffleIndices() {
  const arr = quotes.map((_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

async function fetchImage(wikiSlug) {
  if (imageCache[wikiSlug] !== undefined) return imageCache[wikiSlug];
  try {
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${wikiSlug}`);
    if (!res.ok) throw new Error('not found');
    const data = await res.json();
    const src = data.thumbnail?.source || null;
    imageCache[wikiSlug] = src;
    return src;
  } catch {
    imageCache[wikiSlug] = null;
    return null;
  }
}

function getInitials(name) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

function updateDots() {
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex % DOT_COUNT);
  });
}

async function showQuote(index, animate = true) {
  const q = quotes[indices[index]];

  if (animate) {
    card.classList.add('fade-out');
    await new Promise(r => setTimeout(r, 350));
  }

  // Reset image state
  authorImg.classList.remove('loaded');
  authorImg.src = '';
  authorPlaceholder.textContent = getInitials(q.author);
  authorPlaceholder.classList.remove('hidden');

  quoteText.textContent = q.text;
  authorName.textContent = q.author;
  authorTitle.textContent = q.title;

  card.classList.remove('fade-out');

  // Load image async
  fetchImage(q.wiki).then(src => {
    if (src) {
      authorImg.onload = () => {
        authorImg.classList.add('loaded');
        authorPlaceholder.classList.add('hidden');
      };
      authorImg.src = src;
      authorImg.alt = q.author;
    }
  });
}

function advance() {
  currentIndex = (currentIndex + 1) % indices.length;
  if (currentIndex === 0) indices = shuffleIndices();
  updateDots();
  showQuote(currentIndex);
}

document.getElementById('next-btn').addEventListener('click', advance);

// Swipe support for mobile
let touchStartX = 0;
card.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
card.addEventListener('touchend', e => {
  if (touchStartX - e.changedTouches[0].clientX > 50) advance();
}, { passive: true });

// Init
showQuote(0, false);
updateDots();
