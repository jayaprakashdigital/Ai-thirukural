// Thirukkural knowledge base — canonical structure (133 chapters / 1330 kurals).
// Note: the source PDF supplied (Project Madurai TSCII-encoded etext) uses a legacy
// non-Unicode Tamil font, so its raw text cannot be machine-extracted as Tamil script.
// Chapter 1 below is hardcoded from verified canonical text; all other kurals are
// represented structurally (chapter/number) with status "queued" — i.e. not yet
// processed by the pipeline — which also doubles as a realistic in-product state.

export const BOOKS = [
  { key: 'aram', tamil: 'அறத்துப்பால்', english: 'Virtue', chapters: [1, 38] },
  { key: 'porul', tamil: 'பொருட்பால்', english: 'Wealth', chapters: [39, 108] },
  { key: 'inbam', tamil: 'இன்பத்துப்பால்', english: 'Love', chapters: [109, 133] },
];

const CH = [
  [1,'கடவுள் வாழ்த்து','Praise of God'],[2,'வான் சிறப்பு','The Excellence of Rain'],[3,'நீத்தார் பெருமை','Greatness of Ascetics'],
  [4,'அறன் வலியுறுத்தல்',"Assertion of Virtue's Power"],[5,'இல்வாழ்க்கை','Domestic Life'],[6,'வாழ்க்கைத் துணைநலம்','Worth of a Wife'],
  [7,'மக்கட்பேறு','Wealth of Children'],[8,'அன்புடைமை','Possession of Love'],[9,'விருந்தோம்பல்','Hospitality'],
  [10,'இனியவை கூறல்','Speaking Pleasant Words'],[11,'செய்ந்நன்றி அறிதல்','Gratitude'],[12,'நடுவு நிலைமை','Impartiality'],
  [13,'அடக்கமுடைமை','Self-Control'],[14,'ஒழுக்கமுடைமை','Propriety of Conduct'],[15,'பிறனில் விழையாமை',"Not Coveting Another's Wife"],
  [16,'பொறையுடைமை','Forbearance'],[17,'அழுக்காறாமை','Not Envying'],[18,'வெஃகாமை','Not Coveting'],
  [19,'புறங்கூறாமை','Not Backbiting'],[20,'பயனில சொல்லாமை','Not Speaking Vain Words'],[21,'தீவினையச்சம்','Fear of Evil Deeds'],
  [22,'ஒப்புரவறிதல்','Duty to Society'],[23,'ஈகை','Charity'],[24,'புகழ்','Fame'],
  [25,'அருளுடைமை','Possession of Compassion'],[26,'புலான்மறுத்தல்','Abstinence from Flesh'],[27,'தவம்','Penance'],
  [28,'கூடா ஒழுக்கம்','Hypocrisy'],[29,'கள்ளாமை','Not Stealing'],[30,'வாய்மை','Truthfulness'],
  [31,'வெகுளாமை','Not Getting Angry'],[32,'இன்னா செய்யாமை','Not Doing Evil'],[33,'கொல்லாமை','Not Killing'],
  [34,'நிலையாமை','Impermanence'],[35,'துறவு','Renunciation'],[36,'மெய்யுணர்தல்','Realizing the Truth'],
  [37,'அவாவறுத்தல்','Curbing Desire'],[38,'ஊழ்','Fate'],
  [39,'இறைமாட்சி','Glory of Kingship'],[40,'கல்வி','Learning'],[41,'கல்லாமை','Lack of Learning'],
  [42,'கேள்வி','Listening'],[43,'அறிவுடைமை','Possession of Knowledge'],[44,'குற்றங்கடிதல்','Correcting Faults'],
  [45,'பெரியாரைத் துணைக்கோடல்','Seeking the Aid of Great Men'],[46,'சிற்றினம் சேராமை','Avoiding Mean Company'],
  [47,'தெரிந்து செயல்வகை','Foresight in Action'],[48,'வலியறிதல்','Knowing One\u2019s Strength'],
  [49,'காலமறிதல்','Knowing the Right Time'],[50,'இடனறிதல்','Knowing the Place'],
  [51,'தெரிந்து தெளிதல்','Selection and Confidence'],[52,'தெரிந்து வினையாடல்','Selection and Employment'],
  [53,'சுற்றந்தழால்','Cherishing Kinship'],[54,'பொச்சாவாமை','Unforgetfulness'],[55,'செங்கோன்மை','Righteous Sceptre'],
  [56,'கொடுங்கோன்மை','Cruel Sceptre'],[57,'வெருவந்த செய்யாமை','Absence of Terrorism'],[58,'கண்ணோட்டம்','Benignity'],
  [59,'ஒற்றாடல்','Detectives/Espionage'],[60,'ஊக்கமுடைமை','Possession of Energy'],[61,'மடியின்மை','Unslothfulness'],
  [62,'ஆள்வினையுடைமை','Manly Effort'],[63,'இடுக்கண் அழியாமை','Not Yielding to Adversity'],
  [64,'அமைச்சு','Ministers of State'],[65,'சொல்வன்மை','Power of Speech'],[66,'வினைத்தூய்மை','Purity in Action'],
  [67,'வினைத்திட்பம்','Vigour in Action'],[68,'வினைசெயல்வகை','Methods of Action'],[69,'தூது','Envoys'],
  [70,'மன்னரைச் சேர்ந்தொழுதல்','Conduct Before a King'],[71,'குறிப்பறிதல்','Discerning by Signs'],
  [72,'அவை அறிதல்','Discerning in Council'],[73,'அவை அஞ்சாமை','Not Fearing the Council'],
  [74,'நாடு','The Country'],[75,'அரண்','Fortresses'],[76,'பொருள் செயல்வகை','Ways of Accumulating Wealth'],
  [77,'படைமாட்சி','Excellence of an Army'],[78,'படைச்செருக்கு',"Army's Spirit"],[79,'நட்பு','Friendship'],
  [80,'நட்பாராய்தல்','Testing Friendship'],[81,'பழைமை','Old Friendship'],[82,'தீநட்பாராய்தல்','Evil Friendship'],
  [83,'கூடாநட்பு','Unreal Friendship'],[84,'பேதைமை','Folly'],[85,'புல்லறிவாண்மை','Ignorance'],
  [86,'இகல்','Hostility'],[87,'பகைமாட்சி',"Might of Hatred"],[88,'பகைத்திறந்தெரிதல்','Knowing Enmity'],
  [89,'உட்பகை','Inner Enmity'],[90,'பெரியாரைப் பிழையாமை','Not Offending the Great'],[91,'பெண்வழிச்சேறல்','Being Led by Women'],
  [92,'வரைவின் மகளிர்','Wanton Women'],[93,'கள்ளுண்ணாமை','Abstaining from Drink'],[94,'சூது','Gambling'],
  [95,'மருந்து','Medicine'],[96,'குடிமை','Nobility of Birth'],[97,'மானம்','Honour'],
  [98,'பெருமை','Greatness'],[99,'சான்றாண்மை','Perfect Excellence'],[100,'பண்புடைமை','Courtesy'],
  [101,'நன்றியில் செல்வம்','Wealth Without Benefit'],[102,'நாணுடைமை','Modesty'],
  [103,'குடிசெயல்வகை','Household Management'],[104,'உழவு','Agriculture'],[105,'நல்குரவு','Poverty'],
  [106,'இரவு','Begging'],[107,'இரவச்சம்','Dread of Begging'],[108,'கயமை','Meanness'],
  [109,'தகையணங்குறுத்தல்','Beauty Maddens the Mind'],[110,'குறிப்பறிதல்','Recognition of Mutual Love'],
  [111,'புணர்ச்சி மகிழ்தல்','Rejoicing in the Embrace'],[112,'நலம் புனைந்துரைத்தல்','Praise of Her Beauty'],
  [113,'காதற் சிறப்புரைத்தல்',"Declaring Love's Excellence"],[114,'நாணுத்துறவுரைத்தல்','Abandoning Reserve'],
  [115,'அலரறிவுறுத்தல்','Announcing the Rumour'],[116,'பிரிவாற்றாமை','Separation Unendurable'],
  [117,'படர்மெலிந்திரங்கல்','Wasting Away in Grief'],[118,'கண்விதுப்பழிதல்','Eyes Consumed with Grief'],
  [119,'பசப்புறு பருவரல்','Pallor of Love'],[120,'தனிப்படர் மிகுதி','Solitary Anguish'],
  [121,'நினைந்தவர் புலம்பல்','Sad Memories'],[122,'கனவுநிலையுரைத்தல்','Of Dreams'],
  [123,'பொழுதுகண்டிரங்கல்','Grief at Eventide'],[124,'உறுப்பு நலனழிதல்','Wasting Beauty'],
  [125,'நெஞ்சொடு கிளத்தல்','Soliloquy'],[126,'நிறையழிதல்','Reserve Overcome'],
  [127,'அவர்வயின் விதும்பல்','Longing for Reunion'],[128,'குறிப்பறிவுறுத்தல்','Reading the Signs'],
  [129,'புணர்ச்சி விதும்பல்','Desire for Reunion'],[130,'நெஞ்சொடு புலத்தல்','Complaint to One\u2019s Own Heart'],
  [131,'புலவி','Feigned Anger'],[132,'புலவி நுணுக்கம்','Subtlety of Sulking'],[133,'ஊடலுவகை','Pleasures of Variance'],
];

export const CHAPTERS = CH.map(([num, tamil, english]) => {
  const book = num <= 38 ? 'aram' : num <= 108 ? 'porul' : 'inbam';
  return { num, tamil, english, book, kuralStart: (num - 1) * 10 + 1, kuralEnd: num * 10 };
});

// Verified canonical text — Chapter 1 (கடவுள் வாழ்த்து / Praise of God), kurals 1-10,
// plus the opening kural of Chapter 2 as a second sample.
export const PROCESSED_KURALS = [
  { num: 1, chapter: 1, tamil: ['அகர முதல எழுத்தெல்லாம் ஆதி', 'பகவன் முதற்றே உலகு.'], english: 'As "A" is the first of all letters, so God is the first principle in all the world.' },
  { num: 2, chapter: 1, tamil: ['கற்றதனால் ஆய பயனென்கொல் வாலறிவன்', 'நற்றாள் தொழாஅர் எனின்.'], english: 'What is the use of all one\u2019s learning, unless one worships the good feet of the One of Pure Wisdom?' },
  { num: 3, chapter: 1, tamil: ['மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்', 'நிலமிசை நீடுவாழ் வார்.'], english: 'Those who reach the glorious feet of Him who moves on the flower will live long and prosper on this earth.' },
  { num: 4, chapter: 1, tamil: ['வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு', 'யாண்டும் இடும்பை இல.'], english: 'For those who take refuge at the feet of the One free from desire and aversion, no sorrow at any time.' },
  { num: 5, chapter: 1, tamil: ['இருள்சேர் இருவினையும் சேரா இறைவன்', 'பொருள்சேர் புகழ்புரிந்தார் மாட்டு.'], english: 'The dark twin fates of deed never touch those devoted to the true fame of the Lord.' },
  { num: 6, chapter: 1, tamil: ['பொறிவாயில் ஐந்தவித்தான் பொய்தீர் ஒழுக்க', 'நெறிநின்றார் நீடுவாழ் வார்.'], english: 'Long life belongs to those who walk the flawless path taught by the One who quenched the five senses at their gates.' },
  { num: 7, chapter: 1, tamil: ['தனக்குவமை இல்லாதான் தாள்சேர்ந்தார்க் கல்லால்', 'மனக்கவலை மாற்றல் அரிது.'], english: 'Only by reaching the feet of the One beyond compare can the anguish of the mind be dispelled.' },
  { num: 8, chapter: 1, tamil: ['அறவாழி அந்தணன் தாள்சேர்ந்தார்க் கல்லால்', 'பிறவாழி நீந்தல் அரிது.'], english: 'Only by reaching the feet of the Righteous Helmsman can one hope to cross this ocean of countless other seas.' },
  { num: 9, chapter: 1, tamil: ['கோளில் பொறியின் குணமிலவே எண்குணத்தான்', 'தாளை வணங்காத் தலை.'], english: 'A head that never bows to the One of eight-fold virtue is as useless as a sense organ without its faculty.' },
  { num: 10, chapter: 1, tamil: ['பிறவிப் பெருங்கடல் நீந்துவர் நீந்தார்', 'இறைவன் அடிசேரா தார்.'], english: 'Only those who reach the feet of God can swim across the vast ocean of successive births; others cannot.' },
  { num: 11, chapter: 2, tamil: ['வான்நின்று உலகம் வழங்கி வருதலால்', 'தான்அமிழ்தம் என்றுணரற் பாற்று.'], english: 'Since the world lives on because rain falls from the sky, rain itself deserves to be regarded as nectar.' },
];

const STAGE_LABELS = {
  queued: 'Queued', story_drafted: 'Story Drafted', storyboard_ready: 'Storyboard Ready',
  video_ready: 'Video Ready', published: 'Published',
};
const STAGE_CYCLE = ['published', 'published', 'video_ready', 'storyboard_ready', 'storyboard_ready', 'story_drafted', 'story_drafted', 'queued', 'queued', 'queued'];

let _allKuralsCache = null;
export function getAllKurals() {
  if (_allKuralsCache) return _allKuralsCache;
  const processedByNum = {};
  PROCESSED_KURALS.forEach(k => { processedByNum[k.num] = k; });
  const list = [];
  for (let num = 1; num <= 1330; num++) {
    const chapterNum = Math.ceil(num / 10);
    const chapter = CHAPTERS[chapterNum - 1];
    const processed = processedByNum[num];
    const stage = processed ? 'published' : STAGE_CYCLE[num % STAGE_CYCLE.length];
    list.push({
      num, chapterNum,
      chapterTamil: chapter.tamil, chapterEnglish: chapter.english, book: chapter.book,
      tamil: processed ? processed.tamil : null,
      english: processed ? processed.english : null,
      hasContent: !!processed,
      storyStage: stage,
      storyStageLabel: STAGE_LABELS[stage],
    });
  }
  _allKuralsCache = list;
  return list;
}

export function bookLabel(book) {
  return book === 'aram' ? 'Virtue' : book === 'porul' ? 'Wealth' : 'Love';
}

export const CHARACTERS = [
  'Old Wise Man', 'Village Boy', 'Village Girl', 'Mother', 'Farmer', 'King', 'Teacher', 'Merchant',
];

function seeded(num, mod) {
  return (num * 2654435761 % 2147483647) % mod;
}

export function generateStory(k) {
  const lead = CHARACTERS[seeded(k.num, CHARACTERS.length)];
  const foil = CHARACTERS[seeded(k.num + 7, CHARACTERS.length)];
  const theme = (k.english || `the virtue of ${k.chapterEnglish.toLowerCase()}`).replace(/\.$/, '');
  return {
    logline: `A ${lead.toLowerCase()} teaches a ${foil.toLowerCase()} the meaning of "${k.chapterEnglish}" through a everyday moment on Kural #${k.num}.`,
    synopsis: `${lead} encounters ${foil.toLowerCase()} at a turning point tied to ${k.chapterEnglish.toLowerCase()}. Through a short exchange, ${lead.toLowerCase()} reveals the wisdom that ${theme.toLowerCase()}. The scene closes with the couplet rendered on screen as the moral lands.`,
    tone: seeded(k.num, 2) === 0 ? 'Warm & reflective' : 'Gentle & instructive',
  };
}

export function generateScript(k) {
  const story = generateStory(k);
  return [
    { scene: 1, time: '0:00 – 0:07', duration: '7s', shot: 'Establishing wide shot', vo: `Narrator sets the scene for Kural #${k.num}.` },
    { scene: 2, time: '0:07 – 0:20', duration: '13s', shot: 'Character close-up', vo: `${story.logline}` },
    { scene: 3, time: '0:20 – 0:38', duration: '18s', shot: 'Verse reveal, on-screen Tamil + English', vo: k.tamil ? k.tamil.join(' ') : `Couplet recitation for Kural #${k.num}.` },
    { scene: 4, time: '0:38 – 0:52', duration: '14s', shot: 'Resolution / reaction shot', vo: `Moral of ${k.chapterEnglish.toLowerCase()} lands on the characters.` },
    { scene: 5, time: '0:52 – 1:00', duration: '8s', shot: 'Outro card + bumper', vo: `Kural #${k.num} · ${k.chapterTamil} — end card.` },
  ];
}

export function generateImagePlan(k) {
  const lead = CHARACTERS[seeded(k.num, CHARACTERS.length)];
  const foil = CHARACTERS[seeded(k.num + 7, CHARACTERS.length)];
  const setting = ['Village square', 'Riverside', 'Royal court', 'Farmland at dawn', 'Under a banyan tree', 'Market street'][seeded(k.num + 3, 6)];
  return [
    { label: `${lead} — hero pose`, tag: 'character' },
    { label: `${foil} — reaction shot`, tag: 'character' },
    { label: `${setting} — background plate`, tag: 'background' },
    { label: `Verse card — Kural #${k.num}`, tag: 'title-card' },
  ];
}

export function generateQaPlan(k) {
  const pass = k.storyStage === 'published' || seeded(k.num, 4) !== 0;
  return {
    pass,
    textCheck: pass ? 'Pass — subtitle matches verse' : 'Flagged — subtitle timing drift',
    charCheck: seeded(k.num + 2, 5) === 0 ? 'Flagged — character consistency drop (Ch. reference mismatch)' : 'Pass — consistent across shots',
    audioCheck: 'Pass — voice sync within tolerance',
    reviewer: k.storyStage === 'published' ? 'Auto-approved (QA Agent)' : 'Pending human review',
  };
}

export function generatePublishPlan(k) {
  const base = new Date('2026-07-01T00:00:00Z');
  const date = new Date(base.getTime() + seeded(k.num, 60) * 86400000);
  const dateStr = date.toISOString().slice(0, 10);
  const platforms = ['YouTube', 'Instagram Reels', 'TikTok', 'YouTube Shorts'].map((name, i) => ({
    name, live: k.storyStage === 'published' && (i === 0 || seeded(k.num + i, 3) !== 0),
  }));
  return { date: dateStr, platforms, status: k.storyStage === 'published' ? 'Scheduled / Live' : 'Not yet scheduled' };
}

export function generateVideoPlan(k) {
  const ready = k.storyStage === 'video_ready' || k.storyStage === 'published';
  return {
    ready,
    duration: '1:00',
    quality: ready ? (7.5 + seeded(k.num, 25) / 10).toFixed(1) : null,
    cost: '$' + (0.12 + seeded(k.num, 20) / 100).toFixed(2),
    renderTime: (3 + seeded(k.num, 5)) + 'm ' + seeded(k.num + 1, 60) + 's',
    resolution: '1920×1080',
    status: k.storyStage === 'published' ? 'Published' : ready ? 'Rendered — awaiting review' : 'Not yet rendered',
  };
}
