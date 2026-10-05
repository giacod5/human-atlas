export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac';
export const SYSTEMS: {id:SystemId;name:string;color:string;description:string}[] = [
 {id:'skeletal',name:'Scheletro',color:'#e2d9ba',description:'Le ossa formano l’impalcatura di sostegno del corpo, proteggono gli organi e offrono punti di inserzione ai muscoli. Il loro tessuto interno immagazzina anche minerali e produce le cellule del sangue.'},
 {id:'muscular',name:'Muscoli',color:'#a85b50',description:'I muscoli scheletrici generano il movimento tirando sulle loro inserzioni. Insieme ai tendini muovono le articolazioni, stabilizzano la postura e producono calore.'},
 {id:'cardiac',name:'Cuore',color:'#b96760',description:'Il cuore è una pompa muscolare con quattro camere. Le sue valvole spingono il sangue in avanti attraverso la circolazione polmonare e quella sistemica.'},
 {id:'sensory',name:'Organi di senso',color:'#b0c8ce',description:'Queste strutture contribuiscono ai sensi specifici, tra cui vista, udito ed equilibrio. I loro tessuti specializzati rilevano gli stimoli e lavorano con il sistema nervoso per trasmettere le informazioni.'},
 {id:'arterial',name:'Arterie',color:'#c05245',description:'Il cuore spinge il sangue lungo la circolazione. Le arterie portano il sangue lontano dal cuore per irrorare i tessuti o, nella circolazione polmonare, verso i polmoni.'},
 {id:'venous',name:'Vene',color:'#527c9f',description:'Le vene riportano il sangue verso il cuore. Reti superficiali e profonde raccolgono il sangue dai tessuti; le vene polmonari riportano il sangue ossigenato dai polmoni.'},
 {id:'nervous',name:'Sistema nervoso',color:'#d8b565',description:'Encefalo, midollo spinale e nervi periferici trasmettono ed elaborano i segnali. Sostengono sensibilità, movimento, coordinazione e la regolazione automatica delle funzioni corporee.'},
 {id:'respiratory',name:'Apparato respiratorio',color:'#b98991',description:'Le vie aeree conducono l’aria ai polmoni, dove ossigeno e anidride carbonica passano tra aria e sangue. La respirazione dipende dalle variazioni di pressione prodotte dai muscoli respiratori.'},
 {id:'digestive',name:'Apparato digerente',color:'#b8916b',description:'Il tubo digerente scompone il cibo, assorbe nutrienti e acqua e spinge avanti le scorie. Gli organi accessori forniscono bile ed enzimi digestivi.'},
 {id:'urinary',name:'Apparato urinario',color:'#b47961',description:'I reni filtrano il sangue e regolano l’equilibrio di liquidi, elettroliti e acido–base. L’urina scende lungo gli ureteri fino alla vescica ed esce attraverso l’uretra.'},
 {id:'lymphatic',name:'Sistema linfatico',color:'#879f7c',description:'I vasi linfatici riportano in circolo il liquido in eccesso dei tessuti. I linfonodi e gli altri organi linfoidi sostengono la sorveglianza e le risposte immunitarie.'},
 {id:'endocrine',name:'Sistema endocrino',color:'#c5a09a',description:'Gli organi endocrini rilasciano ormoni nel sangue per coordinare processi come metabolismo, crescita, risposta allo stress e riproduzione.'},
 {id:'reproductive',name:'Apparato riproduttivo',color:'#bda098',description:'Le strutture riproduttive maschili qui rappresentate contribuiscono alla produzione, maturazione e trasporto degli spermatozoi e alla produzione degli ormoni sessuali.'},
 {id:'integumentary',name:'Superficie corporea',color:'#ba9b7d',description:'La superficie corporea fornisce un riferimento anatomico esterno. L’apparato tegumentario forma una barriera protettiva e contribuisce alla sensibilità e alla regolazione della temperatura.'},
 {id:'connective',name:'Tessuto connettivo',color:'#aec3bb',description:'Cartilagini, legamenti e altri tessuti connettivi sostengono, collegano e separano le strutture. Tra i loro ruoli: stabilizzare le articolazioni e distribuire i carichi meccanici.'},
];
export interface Part {id:string;name:string;en?:string;conceptId:string;system:SystemId;chunk:number;positions:number;normals:number;indices:number;vertexCount:number;indexCount:number;bounds:[number[],number[]]}
export interface Concept {id:string;name:string;en?:string;elements:string[]}
export interface Atlas {version:string;sex?:'male';source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number}[];triangles:number}
export type View = 'three-quarter'|'front'|'back'|'side';
export interface SceneState {inspectorOpen?:boolean;explode:number;visible:SystemId[];selected:string[];isolate:boolean;view:View;rotate:boolean;reset:number}
export const DEFAULT_VISIBLE:SystemId[] = ['cardiac','sensory','skeletal','muscular','arterial','venous','nervous','respiratory','digestive','urinary','lymphatic','endocrine','reproductive','connective'];
export const EXPLANATIONS:Record<string,string> = {
 'heart':'Una pompa muscolare nel torace. Il lato destro invia il sangue ai polmoni; il lato sinistro lo spinge nella circolazione sistemica.',
 'liver':'Un grande organo sotto la parte destra del diaframma. Elabora i nutrienti assorbiti, produce la bile e sintetizza molte proteine trasportate dal sangue.',
 'brain':'L’organo centrale del sistema nervoso. Le sue regioni interconnesse sostengono percezione, movimento, memoria, linguaggio e la regolazione delle funzioni corporee.',
 'stomach':'Una camera muscolare tra esofago e intestino tenue. Accoglie il cibo e lo mescola con acido ed enzimi prima di rilasciarlo nel duodeno.',
 'spleen':'Un organo linfoide nella parte superiore sinistra dell’addome. Filtra il sangue, rimuove le cellule del sangue invecchiate e partecipa alle risposte immunitarie.',
 'pancreas':'Un organo addominale con funzioni digestive ed endocrine. Fornisce enzimi all’intestino tenue e rilascia ormoni come insulina e glucagone.',
 'urinary bladder':'Un serbatoio muscolare nella pelvi che raccoglie l’urina proveniente dai reni attraverso gli ureteri.',
 'trachea':'La via aerea principale che collega la laringe ai bronchi. I suoi anelli cartilaginei mantengono aperta la via aerea durante la respirazione.',
 'diaphragm':'Un ampio muscolo che separa torace e addome. Quando si contrae aumenta il volume del torace e aiuta a richiamare aria nei polmoni.',
};
export function explanation(name:string,system:SystemId){return EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? '';}
