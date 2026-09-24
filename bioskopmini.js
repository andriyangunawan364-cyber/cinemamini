(() => {
"use strict";

/* ================================
   MINI CINEMA — KONFIGURASI
================================ */
const WA_NUMBER = "6285782329752";
const TICKET_PRICE = 3000;
const PAGE_SIZE = 12;
const CATALOG_URL = "https://raw.githubusercontent.com/minhaj-313/Netflix-Movies-and-TV-Shows-Dashboard/main/netflix_titles.csv";

/*
  Fallback lokal: website tetap dapat dipakai tanpa internet.
  Saat internet tersedia, katalog akan mencoba memuat hingga 2.000 film
  dari snapshot dataset publik.
*/
const FALLBACK_FILMS = [{"title":"Avatar","genre":"Action • Adventure • Sci-Fi","year":2009,"minutes":162},{"title":"Titanic","genre":"Drama • Romance","year":1997,"minutes":194},{"title":"Inception","genre":"Action • Sci-Fi • Thriller","year":2010,"minutes":148},{"title":"Interstellar","genre":"Adventure • Drama • Sci-Fi","year":2014,"minutes":169},{"title":"The Dark Knight","genre":"Action • Crime • Drama","year":2008,"minutes":152},{"title":"The Matrix","genre":"Action • Sci-Fi","year":1999,"minutes":136},{"title":"Jurassic Park","genre":"Adventure • Sci-Fi","year":1993,"minutes":127},{"title":"The Lord of the Rings: The Fellowship of the Ring","genre":"Adventure • Fantasy","year":2001,"minutes":178},{"title":"The Lord of the Rings: The Two Towers","genre":"Adventure • Fantasy","year":2002,"minutes":179},{"title":"The Lord of the Rings: The Return of the King","genre":"Adventure • Fantasy","year":2003,"minutes":201},{"title":"Harry Potter and the Sorcerer's Stone","genre":"Adventure • Fantasy","year":2001,"minutes":152},{"title":"Harry Potter and the Chamber of Secrets","genre":"Adventure • Fantasy","year":2002,"minutes":161},{"title":"Harry Potter and the Prisoner of Azkaban","genre":"Adventure • Fantasy","year":2004,"minutes":142},{"title":"Harry Potter and the Goblet of Fire","genre":"Adventure • Fantasy","year":2005,"minutes":157},{"title":"Harry Potter and the Order of the Phoenix","genre":"Adventure • Fantasy","year":2007,"minutes":138},{"title":"Harry Potter and the Half-Blood Prince","genre":"Adventure • Fantasy","year":2009,"minutes":153},{"title":"Harry Potter and the Deathly Hallows – Part 1","genre":"Adventure • Fantasy","year":2010,"minutes":146},{"title":"Harry Potter and the Deathly Hallows – Part 2","genre":"Adventure • Fantasy","year":2011,"minutes":130},{"title":"Avengers: Endgame","genre":"Action • Adventure • Sci-Fi","year":2019,"minutes":181},{"title":"Avengers: Infinity War","genre":"Action • Adventure • Sci-Fi","year":2018,"minutes":149},{"title":"The Avengers","genre":"Action • Adventure • Sci-Fi","year":2012,"minutes":143},{"title":"Iron Man","genre":"Action • Adventure • Sci-Fi","year":2008,"minutes":126},{"title":"Iron Man 2","genre":"Action • Adventure • Sci-Fi","year":2010,"minutes":124},{"title":"Iron Man 3","genre":"Action • Adventure • Sci-Fi","year":2013,"minutes":130},{"title":"Captain America: The First Avenger","genre":"Action • Adventure • Sci-Fi","year":2011,"minutes":124},{"title":"Captain America: The Winter Soldier","genre":"Action • Adventure • Sci-Fi","year":2014,"minutes":136},{"title":"Captain America: Civil War","genre":"Action • Adventure • Sci-Fi","year":2016,"minutes":147},{"title":"Thor","genre":"Action • Adventure • Fantasy","year":2011,"minutes":115},{"title":"Thor: The Dark World","genre":"Action • Adventure • Fantasy","year":2013,"minutes":112},{"title":"Thor: Ragnarok","genre":"Action • Adventure • Comedy","year":2017,"minutes":130},{"title":"Black Panther","genre":"Action • Adventure • Sci-Fi","year":2018,"minutes":134},{"title":"Doctor Strange","genre":"Action • Adventure • Fantasy","year":2016,"minutes":115},{"title":"Guardians of the Galaxy","genre":"Action • Adventure • Comedy","year":2014,"minutes":121},{"title":"Guardians of the Galaxy Vol. 2","genre":"Action • Adventure • Comedy","year":2017,"minutes":136},{"title":"Spider-Man: Homecoming","genre":"Action • Adventure • Sci-Fi","year":2017,"minutes":133},{"title":"Spider-Man: Far From Home","genre":"Action • Adventure • Sci-Fi","year":2019,"minutes":129},{"title":"Spider-Man: No Way Home","genre":"Action • Adventure • Sci-Fi","year":2021,"minutes":148},{"title":"Spider-Man","genre":"Action • Adventure • Sci-Fi","year":2002,"minutes":121},{"title":"Spider-Man 2","genre":"Action • Adventure • Sci-Fi","year":2004,"minutes":127},{"title":"Spider-Man 3","genre":"Action • Adventure • Sci-Fi","year":2007,"minutes":139},{"title":"The Amazing Spider-Man","genre":"Action • Adventure • Sci-Fi","year":2012,"minutes":136},{"title":"The Amazing Spider-Man 2","genre":"Action • Adventure • Sci-Fi","year":2014,"minutes":142},{"title":"Deadpool","genre":"Action • Comedy","year":2016,"minutes":108},{"title":"Deadpool 2","genre":"Action • Comedy","year":2018,"minutes":119},{"title":"Logan","genre":"Action • Drama • Sci-Fi","year":2017,"minutes":137},{"title":"X-Men","genre":"Action • Adventure • Sci-Fi","year":2000,"minutes":104},{"title":"X2: X-Men United","genre":"Action • Adventure • Sci-Fi","year":2003,"minutes":133},{"title":"X-Men: Days of Future Past","genre":"Action • Adventure • Sci-Fi","year":2014,"minutes":132},{"title":"Fantastic Four","genre":"Action • Adventure • Sci-Fi","year":2005,"minutes":106},{"title":"Black Widow","genre":"Action • Adventure • Sci-Fi","year":2021,"minutes":134},{"title":"Shang-Chi and the Legend of the Ten Rings","genre":"Action • Adventure • Fantasy","year":2021,"minutes":132},{"title":"Eternals","genre":"Action • Adventure • Fantasy","year":2021,"minutes":156},{"title":"Dune","genre":"Adventure • Drama • Sci-Fi","year":2021,"minutes":155},{"title":"Dune: Part Two","genre":"Action • Adventure • Drama","year":2024,"minutes":166},{"title":"Oppenheimer","genre":"Biography • Drama • History","year":2023,"minutes":180},{"title":"Barbie","genre":"Adventure • Comedy • Fantasy","year":2023,"minutes":114},{"title":"The Batman","genre":"Action • Crime • Drama","year":2022,"minutes":176},{"title":"Joker","genre":"Crime • Drama • Thriller","year":2019,"minutes":122},{"title":"Gladiator","genre":"Action • Adventure • Drama","year":2000,"minutes":155},{"title":"Braveheart","genre":"Biography • Drama • History","year":1995,"minutes":178},{"title":"The Shawshank Redemption","genre":"Drama","year":1994,"minutes":142},{"title":"Forrest Gump","genre":"Drama • Romance","year":1994,"minutes":142},{"title":"The Green Mile","genre":"Crime • Drama • Fantasy","year":1999,"minutes":189},{"title":"The Godfather","genre":"Crime • Drama","year":1972,"minutes":175},{"title":"The Godfather Part II","genre":"Crime • Drama","year":1974,"minutes":202},{"title":"Goodfellas","genre":"Crime • Drama","year":1990,"minutes":145},{"title":"Pulp Fiction","genre":"Crime • Drama","year":1994,"minutes":154},{"title":"Fight Club","genre":"Drama","year":1999,"minutes":139},{"title":"The Prestige","genre":"Drama • Mystery • Sci-Fi","year":2006,"minutes":130},{"title":"Memento","genre":"Mystery • Thriller","year":2000,"minutes":113},{"title":"Whiplash","genre":"Drama • Music","year":2014,"minutes":106},{"title":"La La Land","genre":"Comedy • Drama • Music","year":2016,"minutes":128},{"title":"The Greatest Showman","genre":"Biography • Drama • Music","year":2017,"minutes":105},{"title":"Bohemian Rhapsody","genre":"Biography • Drama • Music","year":2018,"minutes":134},{"title":"A Beautiful Mind","genre":"Biography • Drama","year":2001,"minutes":135},{"title":"The Social Network","genre":"Biography • Drama","year":2010,"minutes":120},{"title":"Catch Me If You Can","genre":"Biography • Crime • Drama","year":2002,"minutes":141},{"title":"The Wolf of Wall Street","genre":"Biography • Comedy • Crime","year":2013,"minutes":180},{"title":"The Departed","genre":"Crime • Drama • Thriller","year":2006,"minutes":151},{"title":"Shutter Island","genre":"Mystery • Thriller","year":2010,"minutes":138},{"title":"Gone Girl","genre":"Drama • Mystery • Thriller","year":2014,"minutes":149},{"title":"Prisoners","genre":"Crime • Drama • Mystery","year":2013,"minutes":153},{"title":"Arrival","genre":"Drama • Sci-Fi","year":2016,"minutes":116},{"title":"Blade Runner 2049","genre":"Action • Drama • Sci-Fi","year":2017,"minutes":164},{"title":"Mad Max: Fury Road","genre":"Action • Adventure • Sci-Fi","year":2015,"minutes":120},{"title":"Top Gun: Maverick","genre":"Action • Drama","year":2022,"minutes":130},{"title":"Mission: Impossible – Fallout","genre":"Action • Adventure • Thriller","year":2018,"minutes":147},{"title":"Mission: Impossible – Ghost Protocol","genre":"Action • Adventure • Thriller","year":2011,"minutes":132},{"title":"Mission: Impossible – Rogue Nation","genre":"Action • Adventure • Thriller","year":2015,"minutes":131},{"title":"John Wick","genre":"Action • Crime • Thriller","year":2014,"minutes":101},{"title":"John Wick: Chapter 2","genre":"Action • Crime • Thriller","year":2017,"minutes":122},{"title":"John Wick: Chapter 3 – Parabellum","genre":"Action • Crime • Thriller","year":2019,"minutes":130},{"title":"John Wick: Chapter 4","genre":"Action • Crime • Thriller","year":2023,"minutes":169},{"title":"The Hunger Games","genre":"Action • Adventure • Sci-Fi","year":2012,"minutes":142},{"title":"The Hunger Games: Catching Fire","genre":"Action • Adventure • Sci-Fi","year":2013,"minutes":146},{"title":"The Hunger Games: Mockingjay – Part 1","genre":"Action • Adventure • Sci-Fi","year":2014,"minutes":123},{"title":"The Hunger Games: Mockingjay – Part 2","genre":"Action • Adventure • Sci-Fi","year":2015,"minutes":137},{"title":"Pirates of the Caribbean: The Curse of the Black Pearl","genre":"Action • Adventure • Fantasy","year":2003,"minutes":143},{"title":"Pirates of the Caribbean: Dead Man's Chest","genre":"Action • Adventure • Fantasy","year":2006,"minutes":151},{"title":"Pirates of the Caribbean: At World's End","genre":"Action • Adventure • Fantasy","year":2007,"minutes":169},{"title":"Pirates of the Caribbean: On Stranger Tides","genre":"Action • Adventure • Fantasy","year":2011,"minutes":137},{"title":"The Incredibles","genre":"Animation • Action • Adventure","year":2004,"minutes":115},{"title":"Incredibles 2","genre":"Animation • Action • Adventure","year":2018,"minutes":118},{"title":"Toy Story","genre":"Animation • Adventure • Comedy","year":1995,"minutes":81},{"title":"Toy Story 2","genre":"Animation • Adventure • Comedy","year":1999,"minutes":92},{"title":"Toy Story 3","genre":"Animation • Adventure • Comedy","year":2010,"minutes":103},{"title":"Toy Story 4","genre":"Animation • Adventure • Comedy","year":2019,"minutes":100},{"title":"Finding Nemo","genre":"Animation • Adventure • Comedy","year":2003,"minutes":100},{"title":"Finding Dory","genre":"Animation • Adventure • Comedy","year":2016,"minutes":97},{"title":"Up","genre":"Animation • Adventure • Comedy","year":2009,"minutes":96},{"title":"WALL-E","genre":"Animation • Adventure • Sci-Fi","year":2008,"minutes":98},{"title":"Ratatouille","genre":"Animation • Adventure • Comedy","year":2007,"minutes":111},{"title":"Coco","genre":"Animation • Adventure • Family","year":2017,"minutes":105},{"title":"Inside Out","genre":"Animation • Adventure • Comedy","year":2015,"minutes":95},{"title":"Inside Out 2","genre":"Animation • Adventure • Comedy","year":2024,"minutes":96},{"title":"Frozen","genre":"Animation • Adventure • Comedy","year":2013,"minutes":102},{"title":"Frozen II","genre":"Animation • Adventure • Comedy","year":2019,"minutes":103},{"title":"Moana","genre":"Animation • Adventure • Comedy","year":2016,"minutes":107},{"title":"Zootopia","genre":"Animation • Adventure • Comedy","year":2016,"minutes":108},{"title":"The Lion King","genre":"Animation • Adventure • Drama","year":1994,"minutes":88},{"title":"The Lion King","genre":"Animation • Adventure • Drama","year":2019,"minutes":118},{"title":"Aladdin","genre":"Adventure • Comedy • Family","year":1992,"minutes":90},{"title":"Beauty and the Beast","genre":"Animation • Family • Fantasy","year":1991,"minutes":84},{"title":"Mulan","genre":"Animation • Adventure • Drama","year":1998,"minutes":88},{"title":"Tangled","genre":"Animation • Adventure • Comedy","year":2010,"minutes":100},{"title":"Shrek","genre":"Animation • Adventure • Comedy","year":2001,"minutes":90},{"title":"Shrek 2","genre":"Animation • Adventure • Comedy","year":2004,"minutes":93},{"title":"Kung Fu Panda","genre":"Animation • Action • Adventure","year":2008,"minutes":92},{"title":"Kung Fu Panda 2","genre":"Animation • Action • Adventure","year":2011,"minutes":90},{"title":"Kung Fu Panda 3","genre":"Animation • Action • Adventure","year":2016,"minutes":95},{"title":"Despicable Me","genre":"Animation • Adventure • Comedy","year":2010,"minutes":95},{"title":"Minions","genre":"Animation • Adventure • Comedy","year":2015,"minutes":91},{"title":"The Secret Life of Pets","genre":"Animation • Adventure • Comedy","year":2016,"minutes":87},{"title":"How to Train Your Dragon","genre":"Animation • Action • Adventure","year":2010,"minutes":98},{"title":"How to Train Your Dragon 2","genre":"Animation • Action • Adventure","year":2014,"minutes":102},{"title":"How to Train Your Dragon: The Hidden World","genre":"Animation • Action • Adventure","year":2019,"minutes":104},{"title":"A Quiet Place","genre":"Drama • Horror • Sci-Fi","year":2018,"minutes":90},{"title":"A Quiet Place Part II","genre":"Drama • Horror • Sci-Fi","year":2020,"minutes":97},{"title":"It","genre":"Drama • Horror","year":2017,"minutes":135},{"title":"The Conjuring","genre":"Horror • Mystery • Thriller","year":2013,"minutes":112},{"title":"The Conjuring 2","genre":"Horror • Mystery • Thriller","year":2016,"minutes":134},{"title":"Annabelle","genre":"Horror • Mystery • Thriller","year":2014,"minutes":99},{"title":"Scream","genre":"Horror • Mystery • Thriller","year":1996,"minutes":111},{"title":"A Nightmare on Elm Street","genre":"Horror","year":1984,"minutes":91},{"title":"The Exorcist","genre":"Horror","year":1973,"minutes":132},{"title":"The Sixth Sense","genre":"Drama • Mystery • Thriller","year":1999,"minutes":107},{"title":"Get Out","genre":"Horror • Mystery • Thriller","year":2017,"minutes":104},{"title":"Us","genre":"Horror • Mystery • Thriller","year":2019,"minutes":116},{"title":"Train to Busan","genre":"Action • Horror • Thriller","year":2016,"minutes":118},{"title":"Parasite","genre":"Drama • Thriller","year":2019,"minutes":132},{"title":"Everything Everywhere All at Once","genre":"Action • Adventure • Comedy","year":2022,"minutes":139},{"title":"Knives Out","genre":"Comedy • Crime • Mystery","year":2019,"minutes":130},{"title":"Glass Onion: A Knives Out Mystery","genre":"Comedy • Crime • Mystery","year":2022,"minutes":139},{"title":"The Menu","genre":"Comedy • Horror • Thriller","year":2022,"minutes":107},{"title":"The Grand Budapest Hotel","genre":"Adventure • Comedy • Crime","year":2014,"minutes":99},{"title":"The Truman Show","genre":"Comedy • Drama","year":1998,"minutes":103},{"title":"The Terminal","genre":"Comedy • Drama","year":2004,"minutes":128},{"title":"Cast Away","genre":"Adventure • Drama","year":2000,"minutes":143},{"title":"The Martian","genre":"Adventure • Drama • Sci-Fi","year":2015,"minutes":144},{"title":"Gravity","genre":"Drama • Sci-Fi • Thriller","year":2013,"minutes":91},{"title":"Life of Pi","genre":"Adventure • Drama • Fantasy","year":2012,"minutes":127},{"title":"Slumdog Millionaire","genre":"Drama • Romance","year":2008,"minutes":120},{"title":"3 Idiots","genre":"Comedy • Drama","year":2009,"minutes":170},{"title":"PK","genre":"Comedy • Drama • Fantasy","year":2014,"minutes":153},{"title":"Dangal","genre":"Biography • Drama • Sport","year":2016,"minutes":161},{"title":"RRR","genre":"Action • Drama","year":2022,"minutes":187},{"title":"Your Name","genre":"Animation • Drama • Fantasy","year":2016,"minutes":106},{"title":"Spirited Away","genre":"Animation • Adventure • Fantasy","year":2001,"minutes":125},{"title":"My Neighbor Totoro","genre":"Animation • Family • Fantasy","year":1988,"minutes":86},{"title":"Howl's Moving Castle","genre":"Animation • Adventure • Fantasy","year":2004,"minutes":119},{"title":"Princess Mononoke","genre":"Animation • Adventure • Fantasy","year":1997,"minutes":134},{"title":"Weathering with You","genre":"Animation • Drama • Fantasy","year":2019,"minutes":112},{"title":"The Boy and the Heron","genre":"Animation • Adventure • Fantasy","year":2023,"minutes":124},{"title":"A Silent Voice","genre":"Animation • Drama","year":2016,"minutes":130},{"title":"Weathering With You","genre":"Animation • Drama • Fantasy","year":2019,"minutes":112},{"title":"The Pursuit of Happyness","genre":"Biography • Drama","year":2006,"minutes":117},{"title":"The Intouchables","genre":"Biography • Comedy • Drama","year":2011,"minutes":112},{"title":"The Pianist","genre":"Biography • Drama • Music","year":2002,"minutes":150},{"title":"12 Years a Slave","genre":"Biography • Drama • History","year":2013,"minutes":134},{"title":"1917","genre":"Drama • War","year":2019,"minutes":119},{"title":"Saving Private Ryan","genre":"Drama • War","year":1998,"minutes":169},{"title":"Dunkirk","genre":"Action • Drama • History","year":2017,"minutes":106},{"title":"The Imitation Game","genre":"Biography • Drama • History","year":2014,"minutes":114},{"title":"Ford v Ferrari","genre":"Action • Biography • Drama","year":2019,"minutes":152},{"title":"Moneyball","genre":"Biography • Drama • Sport","year":2011,"minutes":133},{"title":"Creed","genre":"Drama • Sport","year":2015,"minutes":133},{"title":"Rocky","genre":"Drama • Sport","year":1976,"minutes":120},{"title":"Karate Kid","genre":"Action • Drama • Family","year":1984,"minutes":126},{"title":"The Karate Kid","genre":"Action • Drama • Family","year":2010,"minutes":140},{"title":"Ready Player One","genre":"Action • Adventure • Sci-Fi","year":2018,"minutes":140},{"title":"Edge of Tomorrow","genre":"Action • Sci-Fi","year":2014,"minutes":113},{"title":"Minority Report","genre":"Action • Crime • Sci-Fi","year":2002,"minutes":145},{"title":"War of the Worlds","genre":"Adventure • Sci-Fi • Thriller","year":2005,"minutes":116},{"title":"I Am Legend","genre":"Drama • Sci-Fi • Thriller","year":2007,"minutes":101},{"title":"World War Z","genre":"Action • Adventure • Horror","year":2013,"minutes":116},{"title":"Pacific Rim","genre":"Action • Adventure • Sci-Fi","year":2013,"minutes":131},{"title":"Godzilla","genre":"Action • Adventure • Sci-Fi","year":2014,"minutes":123},{"title":"Kong: Skull Island","genre":"Action • Adventure • Fantasy","year":2017,"minutes":118},{"title":"King Kong","genre":"Action • Adventure • Drama","year":2005,"minutes":187},{"title":"The Mummy","genre":"Action • Adventure • Fantasy","year":1999,"minutes":124},{"title":"National Treasure","genre":"Action • Adventure • Mystery","year":2004,"minutes":131},{"title":"The Chronicles of Narnia: The Lion, the Witch and the Wardrobe","genre":"Adventure • Family • Fantasy","year":2005,"minutes":143},{"title":"The Chronicles of Narnia: Prince Caspian","genre":"Adventure • Family • Fantasy","year":2008,"minutes":150},{"title":"The Chronicles of Narnia: The Voyage of the Dawn Treader","genre":"Adventure • Family • Fantasy","year":2010,"minutes":113}];
let FILMS = [...FALLBACK_FILMS];

const $ = (id) => document.getElementById(id);
const els = {
  grid: $("filmGrid"), search: $("filmSearch"), genre: $("genreFilter"), year: $("yearFilter"),
  sort: $("sortFilter"), count: $("catalogCount"), status: $("catalogStatus"),
  empty: $("emptyState"), prev: $("prevPage"), next: $("nextPage"), pageInfo: $("pageInfo"),
  form: $("bookingForm"), film: $("film"), duration: $("duration"), qty: $("qty"),
  total: $("totalPrice"), ticket: $("ticketNumber"), cart: $("cartSummary"),
  clear: $("clearFilm"), toast: $("toast")
};

let page = 1;
let selectedFilm = null;

function rupiah(n) {
  return new Intl.NumberFormat("id-ID", {style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
}
function durationText(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h ? `${h}j ${m}m` : `${m}m`;
}
function makeTicketNumber() {
  const d = new Date();
  const stamp = `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}`;
  const random = Math.floor(1000 + Math.random()*9000);
  return `MC-${stamp}-${random}`;
}
function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 2600);
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}

/* Parser CSV sederhana tetapi aman untuk koma dan tanda kutip. */
function parseCSV(text) {
  const rows=[]; let row=[]; let cell=""; let quoted=false;
  for(let i=0;i<text.length;i++) {
    const ch=text[i], next=text[i+1];
    if(ch === '"') {
      if(quoted && next === '"') { cell+='"'; i++; }
      else { quoted=!quoted; }
    } else if(ch === "," && !quoted) { row.push(cell); cell=""; }
    else if((ch === "\n" || ch === "\r") && !quoted) {
      if(ch==="\r" && next==="\n") i++;
      row.push(cell); cell="";
      if(row.some(v=>v.trim()!=="")) rows.push(row);
      row=[];
    } else cell+=ch;
  }
  if(cell!=="" || row.length) { row.push(cell); if(row.some(v=>v.trim()!=="")) rows.push(row); }
  return rows;
}

function mapGenre(listedIn) {
  const s=(listedIn||"").toLowerCase();
  if(s.includes("anime")) return "Anime";
  if(s.includes("children") || s.includes("family")) return "Family";
  if(s.includes("comedi")) return "Comedy";
  if(s.includes("horror")) return "Horror";
  if(s.includes("action")) return "Action";
  if(s.includes("romantic")) return "Romance";
  if(s.includes("document")) return "Documentary";
  if(s.includes("drama")) return "Drama";
  if(s.includes("thriller")) return "Thriller";
  if(s.includes("sci-fi")) return "Sci-Fi";
  return "Other";
}

function csvToFilms(text) {
  const rows=parseCSV(text);
  if(rows.length<2) return [];
  const header=rows[0].map(x=>x.trim().toLowerCase());
  const idx=(name)=>header.indexOf(name);
  const typeI=idx("type"), titleI=idx("title"), yearI=idx("release_year"), durI=idx("duration"), genreI=idx("listed_in");
  const result=[]; const seen=new Set();
  for(let i=1;i<rows.length && result.length<2000;i++) {
    const r=rows[i];
    if((r[typeI]||"").trim().toLowerCase()!=="movie") continue;
    const title=(r[titleI]||"").trim();
    const year=Number((r[yearI]||"").trim());
    const rawDur=(r[durI]||"").trim();
    const minutes=parseInt(rawDur,10);
    if(!title || !Number.isFinite(year) || !Number.isFinite(minutes)) continue;
    const key=title.toLowerCase()+"|"+year;
    if(seen.has(key)) continue;
    seen.add(key);
    result.push({title,year,minutes,genre:mapGenre(r[genreI])});
  }
  return result;
}

function setupFilters() {
  els.genre.innerHTML='<option value="">Semua genre</option>';
  els.year.innerHTML='<option value="">Semua tahun</option>';
  const genres=[...new Set(FILMS.map(f=>f.genre))].sort((a,b)=>a.localeCompare(b));
  const years=[...new Set(FILMS.map(f=>f.year))].sort((a,b)=>b-a);
  genres.forEach(g=>els.genre.insertAdjacentHTML("beforeend",`<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`));
  years.forEach(y=>els.year.insertAdjacentHTML("beforeend",`<option value="${y}">${y}</option>`));
  els.count.textContent=`${FILMS.length.toLocaleString("id-ID")} film`;
}

function filteredFilms() {
  const q=els.search.value.trim().toLowerCase(), genre=els.genre.value, year=els.year.value;
  let list=FILMS.filter(f=>
    (!q || f.title.toLowerCase().includes(q) || f.genre.toLowerCase().includes(q)) &&
    (!genre || f.genre===genre) &&
    (!year || String(f.year)===year)
  );
  if(els.sort.value==="az") list.sort((a,b)=>a.title.localeCompare(b.title));
  if(els.sort.value==="newest") list.sort((a,b)=>b.year-a.year||a.title.localeCompare(b.title));
  if(els.sort.value==="oldest") list.sort((a,b)=>a.year-b.year||a.title.localeCompare(b.title));
  return list;
}

function renderFilms() {
  const list=filteredFilms(), pages=Math.max(1,Math.ceil(list.length/PAGE_SIZE));
  if(page>pages) page=pages;
  const start=(page-1)*PAGE_SIZE, visible=list.slice(start,start+PAGE_SIZE);
  els.grid.innerHTML=visible.map((f,i)=>`
    <article class="film-card">
      <div class="film-year">${f.year}</div>
      <h3>${escapeHtml(f.title)}</h3>
      <div class="film-meta">${escapeHtml(f.genre)}<br>${durationText(f.minutes)}</div>
      <button class="btn primary choose-film" type="button" data-index="${i}">Pilih Film</button>
    </article>`).join("");
  els.empty.classList.toggle("hidden",list.length!==0);
  els.pageInfo.textContent=`Halaman ${page} dari ${pages}`;
  els.prev.disabled=page<=1; els.next.disabled=page>=pages;
  els.count.textContent=`${list.length.toLocaleString("id-ID")} film ditemukan`;
  els.grid.querySelectorAll(".choose-film").forEach((btn,i)=>btn.addEventListener("click",()=>selectFilm(visible[i])));
}

function selectFilm(film) {
  if(!film) return;
  selectedFilm=film;
  els.film.value=`${film.title} (${film.year})`;
  els.duration.value=durationText(film.minutes);
  updateCart();
  document.querySelector("#booking").scrollIntoView({behavior:"smooth",block:"start"});
  showToast(`Film dipilih: ${film.title}`);
}

function updateTotal() {
  let qty=Number(els.qty.value)||1; qty=Math.max(1,Math.min(20,qty)); els.qty.value=qty;
  els.total.textContent=rupiah(TICKET_PRICE*qty); updateCart();
}
function updateCart() {
  if(!selectedFilm) {
    els.cart.innerHTML='<span class="muted">Belum ada film dipilih. Kembali ke katalog dan tekan “Pilih Film”.</span>';
    return;
  }
  const qty=Number(els.qty.value)||1;
  els.cart.innerHTML=`<strong>${escapeHtml(selectedFilm.title)}</strong>
    <p class="muted">${selectedFilm.year} • ${durationText(selectedFilm.minutes)}</p>
    <p class="muted">${qty} tiket × ${rupiah(TICKET_PRICE)}</p>
    <strong>Total ${rupiah(qty*TICKET_PRICE)}</strong>`;
}
function validatePhone(phone) { const digits=phone.replace(/\D/g,""); return digits.length>=9&&digits.length<=15; }
function formData() {
  return {
    film:els.film.value.trim(),name:$("name").value.trim(),age:Number($("age").value),
    buyerPhone:$("buyerPhone").value.trim(),ticketNumber:els.ticket.value,location:$("location").value,
    startTime:$("startTime").value,duration:els.duration.value,qty:Number(els.qty.value),
    payment:$("payment").value,note:$("note").value.trim()
  };
}
function formatStart(value) {
  if(!value) return "-"; const d=new Date(value);
  return Number.isNaN(d.getTime())?value:d.toLocaleString("id-ID",{dateStyle:"full",timeStyle:"short"});
}
function sendWhatsApp(data) {
  if(!/^\d{9,15}$/.test(WA_NUMBER)) return showToast("Nomor WhatsApp admin belum benar. Periksa script.js.");
  const message=[
    "🎬 *PESANAN TIKET MINI CINEMA*","",
    `Nomor tiket: ${data.ticketNumber}`,`Film: ${data.film}`,`Durasi: ${data.duration}`,
    `Nama: ${data.name}`,`Umur: ${data.age} tahun`,`WhatsApp pembeli: ${data.buyerPhone}`,
    `Lokasi: ${data.location}`,`Mulai: ${formatStart(data.startTime)}`,`Jumlah tiket: ${data.qty}`,
    `Harga/tiket: ${rupiah(TICKET_PRICE)}`,`Total: ${rupiah(TICKET_PRICE*data.qty)}`,
    `Pembayaran: ${data.payment}`,`Catatan: ${data.note||"-"}`
  ].join("\n");
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
}

async function loadRemoteCatalog() {
  try {
    els.status.textContent="Mengambil katalog film…";
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),8000);
    const response=await fetch(CATALOG_URL,{signal:controller.signal,cache:"no-store"});
    clearTimeout(timer);
    if(!response.ok) throw new Error("HTTP "+response.status);
    const text=await response.text();
    const remote=csvToFilms(text);
    if(remote.length<500) throw new Error("Katalog terlalu sedikit");
    FILMS=remote.slice(0,2000);
    page=1;
    setupFilters();
    renderFilms();
    els.status.textContent=`Katalog online berhasil dimuat: ${FILMS.length.toLocaleString("id-ID")} film.`;
  } catch(err) {
    FILMS=[...FALLBACK_FILMS];
    setupFilters(); renderFilms();
    els.status.textContent=`Mode offline: ${FILMS.length} film cadangan siap dipilih.`;
  }
}

els.search.addEventListener("input",()=>{page=1;renderFilms();});
els.genre.addEventListener("change",()=>{page=1;renderFilms();});
els.year.addEventListener("change",()=>{page=1;renderFilms();});
els.sort.addEventListener("change",()=>{page=1;renderFilms();});
els.prev.addEventListener("click",()=>{if(page>1){page--;renderFilms();}});
els.next.addEventListener("click",()=>{const pages=Math.max(1,Math.ceil(filteredFilms().length/PAGE_SIZE));if(page<pages){page++;renderFilms();}});
els.qty.addEventListener("input",updateTotal);
els.clear.addEventListener("click",()=>{selectedFilm=null;els.film.value="";els.duration.value="";updateCart();showToast("Pilihan film dihapus.");});
els.form.addEventListener("submit",(e)=>{
  e.preventDefault(); const data=formData();
  if(!selectedFilm) return showToast("Pilih film terlebih dahulu.");
  if(!data.name) return showToast("Isi nama pembeli.");
  if(!Number.isFinite(data.age)||data.age<1||data.age>120) return showToast("Isi umur dengan benar.");
  if(!validatePhone(data.buyerPhone)) return showToast("Nomor WhatsApp pembeli tidak valid.");
  if(!data.location) return showToast("Pilih lokasi bioskop.");
  if(!data.startTime) return showToast("Pilih waktu mulai.");
  if(!data.payment) return showToast("Pilih metode pembayaran.");
  if(!Number.isInteger(data.qty)||data.qty<1||data.qty>20) return showToast("Jumlah tiket harus 1–20.");
  sendWhatsApp(data); showToast("Pesanan disiapkan untuk WhatsApp admin.");
});

els.ticket.value=makeTicketNumber();
setupFilters();
renderFilms();
updateTotal();
loadRemoteCatalog();
})();
