import { ChatBot } from '../types';

export const chatbots: ChatBot[] = [
  {
    id: 'legal',
    name: {
      en: 'LegalBot',
      af: 'RegsBot'
    },
    icon: 'Scale',
    description: {
      en: 'Expert legal guidance and contract advice',
      af: 'Deskundige regsleiding en kontrakadvies'
    },
    industry: 'Legal',
    category: 'Professional Services',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Hello! I'm your legal assistant. How can I help you with legal matters today?",
      af: "Hallo! Ek is jou regsassistent. Hoe kan ek jou vandag help met regskwessies?"
    },
    commonQuestions: [
      {
        id: 'contract-review',
        category: 'Quick Access',
        question: {
          en: "How do I review a contract?",
          af: "Hoe hersien ek 'n kontrak?"
        },
        answer: {
          en: "When reviewing a contract, check these key elements:\n1. Parties and obligations\n2. Payment terms\n3. Duration and termination\n4. Liability clauses\n5. Dispute resolution",
          af: "Wanneer u 'n kontrak hersien, kontroleer hierdie sleutelelemente:\n1. Partye en verpligtinge\n2. Betalingsvoorwaardes\n3. Duur en beëindiging\n4. Aanspreeklikheidsklousules\n5. Geskilbeslegting"
        }
      },
      {
        id: 'legal-rights',
        category: 'Quick Access',
        question: {
          en: "What are my basic legal rights?",
          af: "Wat is my basiese regsregte?"
        },
        answer: {
          en: "Basic legal rights include:\n1. Right to legal representation\n2. Right to fair treatment\n3. Right to privacy\n4. Freedom of speech\n5. Property rights",
          af: "Basiese regsregte sluit in:\n1. Reg tot regsverteenwoordiging\n2. Reg tot billike behandeling\n3. Reg tot privaatheid\n4. Vryheid van spraak\n5. Eiendomsregte"
        }
      },
      {
        id: 'business-structure',
        category: 'Quick Access',
        question: {
          en: "Which business structure should I choose?",
          af: "Watter besigheidstruktuur moet ek kies?"
        },
        answer: {
          en: "Common business structures:\n1. Sole Proprietorship - Simple but personal liability\n2. LLC - Limited liability, tax flexibility\n3. Corporation - Complex but strong protection\n4. Partnership - Shared responsibility",
          af: "Algemene besigheidstrukture:\n1. Eenmansaak - Eenvoudig maar persoonlike aanspreeklikheid\n2. BK - Beperkte aanspreeklikheid, belastingbuigsaamheid\n3. Korporasie - Kompleks maar sterk beskerming\n4. Vennootskap - Gedeelde verantwoordelikheid"
        }
      },
      {
        id: 'intellectual-property',
        category: 'Quick Access',
        question: {
          en: "How do I protect my intellectual property?",
          af: "Hoe beskerm ek my intellektuele eiendom?"
        },
        answer: {
          en: "Protect your IP through:\n1. Patents for inventions\n2. Trademarks for brands\n3. Copyrights for creative works\n4. NDAs for trade secrets",
          af: "Beskerm jou IE deur:\n1. Patente vir uitvindings\n2. Handelsmerke vir handelsname\n3. Kopiereg vir kreatiewe werke\n4. NDA's vir handelsgeheime"
        }
      },
      {
        id: 'legal-terminology',
        category: 'Knowledge Base',
        question: {
          en: "What are common legal terms I should know?",
          af: "Watter algemene regsterme moet ek ken?"
        },
        answer: {
          en: "Essential legal terminology:\n\n1. Liability\n- Definition: Legal responsibility for actions\n- Types: Civil, criminal, strict liability\n- Impact: Financial and legal obligations\n\n2. Jurisdiction\n- Definition: Legal authority over cases\n- Types: Federal, state, local\n- Importance: Determines applicable laws\n\n3. Precedent\n- Definition: Previous court decisions\n- Usage: Guides similar cases\n- Impact: Influences legal outcomes",
          af: "Noodsaaklike regsterminologie:\n\n1. Aanspreeklikheid\n- Definisie: Wetlike verantwoordelikheid vir aksies\n- Tipes: Siviel, krimineel, streng aanspreeklikheid\n- Impak: Finansiële en wetlike verpligtinge\n\n2. Jurisdiksie\n- Definisie: Wetlike gesag oor sake\n- Tipes: Federaal, staat, plaaslik\n- Belangrikheid: Bepaal toepaslike wette\n\n3. Presedent\n- Definisie: Vorige hofbeslissings\n- Gebruik: Lei soortgelyke sake\n- Impak: Beïnvloed regsgevolge"
        }
      }
    ]
  },
  {
    id: 'medical',
    name: {
      en: 'MedBot',
      af: 'MediesBot'
    },
    icon: 'Stethoscope',
    description: {
      en: 'General medical information and health guidance',
      af: 'Algemene mediese inligting en gesondheidsleiding'
    },
    industry: 'Healthcare',
    category: 'Healthcare',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Hi! I'm here to provide general health information. Remember, always consult a healthcare professional for medical advice.",
      af: "Hi! Ek is hier om algemene gesondheidsinligting te verskaf. Onthou, raadpleeg altyd 'n gesondheidsorgprofessioneel vir mediese advies."
    },
    commonQuestions: [
      {
        id: 'preventive-care',
        category: 'Quick Access',
        question: {
          en: "What preventive care do I need?",
          af: "Watter voorkomende sorg benodig ek?"
        },
        answer: {
          en: "Essential preventive care:\n1. Annual check-ups\n2. Vaccinations\n3. Cancer screenings\n4. Dental check-ups\n5. Vision tests",
          af: "Noodsaaklike voorkomende sorg:\n1. Jaarlikse ondersoeke\n2. Inentings\n3. Kankertoetse\n4. Tandheelkundige ondersoeke\n5. Visietoetse"
        }
      },
      {
        id: 'healthy-lifestyle',
        category: 'Quick Access',
        question: {
          en: "How can I maintain a healthy lifestyle?",
          af: "Hoe kan ek 'n gesonde leefstyl handhaaf?"
        },
        answer: {
          en: "Key healthy lifestyle habits:\n1. Regular exercise\n2. Balanced diet\n3. Adequate sleep\n4. Stress management\n5. Regular health checks",
          af: "Belangrike gesonde lewensgewoontes:\n1. Gereelde oefening\n2. Gebalanseerde dieet\n3. Voldoende slaap\n4. Stresbestuur\n5. Gereelde gesondheidskontroles"
        }
      },
      {
        id: 'medical-terms',
        category: 'Medical Knowledge',
        question: {
          en: "What do common medical terms mean?",
          af: "Wat beteken algemene mediese terme?"
        },
        answer: {
          en: "Common medical terminology:\n\n1. Chronic Conditions\n- Definition: Long-term health conditions\n- Examples: Diabetes, hypertension\n- Management: Ongoing care and monitoring\n\n2. Acute Conditions\n- Definition: Sudden onset conditions\n- Characteristics: Short-term, intense\n- Examples: Infections, injuries\n\n3. Preventive Care\n- Definition: Proactive health maintenance\n- Components: Screenings, vaccinations\n- Benefits: Early detection, prevention",
          af: "Algemene mediese terminologie:\n\n1. Chroniese Toestande\n- Definisie: Langtermyn gesondheidstoestande\n- Voorbeelde: Diabetes, hipertensie\n- Bestuur: Deurlopende sorg en monitering\n\n2. Akute Toestande\n- Definisie: Skielike aanvang toestande\n- Eienskappe: Korttermyn, intens\n- Voorbeelde: Infeksies, beserings\n\n3. Voorkomende Sorg\n- Definisie: Proaktiewe gesondheidsonderhoud\n- Komponente: Siftings, inentings\n- Voordele: Vroeë opsporing, voorkoming"
        }
      }
    ]
  },
  {
    id: 'hr',
    name: {
      en: 'HRBot',
      af: 'MHBot'
    },
    icon: 'UserRound',
    description: {
      en: 'Human resources and workplace guidance',
      af: 'Menslike hulpbronne en werkplek leiding'
    },
    industry: 'HR',
    category: 'Professional Services',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Welcome! I'm your HR assistant. How can I help you with workplace matters?",
      af: "Welkom! Ek is jou MH-assistent. Hoe kan ek jou help met werkplekkwessies?"
    },
    commonQuestions: [
      {
        id: 'employee-rights',
        category: 'Employee Relations',
        question: {
          en: "What are basic employee rights?",
          af: "Wat is basiese werknemersregte?"
        },
        answer: {
          en: "Key employee rights include:\n1. Fair compensation\n2. Safe workplace\n3. Non-discrimination\n4. Privacy rights\n5. Leave benefits",
          af: "Belangrike werknemersregte sluit in:\n1. Billike vergoeding\n2. Veilige werkplek\n3. Nie-diskriminasie\n4. Privaatheidsregte\n5. Verlofvoordele"
        }
      },
      {
        id: 'performance-review',
        category: 'Performance Management',
        question: {
          en: "How to conduct performance reviews?",
          af: "Hoe voer ek prestasie-oorsigte uit?"
        },
        answer: {
          en: "Effective performance review steps:\n1. Set clear objectives\n2. Gather feedback\n3. Prepare documentation\n4. Have open discussion\n5. Set future goals",
          af: "Effektiewe prestasie-oorsig stappe:\n1. Stel duidelike doelwitte\n2. Versamel terugvoer\n3. Berei dokumentasie voor\n4. Hou oop bespreking\n5. Stel toekomstige doelwitte"
        }
      },
      {
        id: 'recruitment-best-practices',
        category: 'Recruitment',
        question: {
          en: "What are recruitment best practices?",
          af: "Wat is die beste werwingspraktyke?"
        },
        answer: {
          en: "Recruitment best practices:\n1. Clear job descriptions\n2. Structured interviews\n3. Skills assessment\n4. Background checks\n5. Fair selection process",
          af: "Beste werwingspraktyke:\n1. Duidelike posbeskrywings\n2. Gestruktureerde onderhoude\n3. Vaardigheidsevaluering\n4. Agtergrondkontroles\n5. Billike keuringsproses"
        }
      },
      {
        id: 'workplace-safety',
        category: 'Safety',
        question: {
          en: "How to ensure workplace safety?",
          af: "Hoe verseker ek werkplekveiligheid?"
        },
        answer: {
          en: "Workplace safety measures:\n1. Regular safety training\n2. Emergency procedures\n3. Hazard assessment\n4. Safety equipment\n5. Incident reporting",
          af: "Werkplekveiligheidsmaatreëls:\n1. Gereelde veiligheidsopleiding\n2. Noodprosedures\n3. Gevaar-assessering\n4. Veiligheidstoerusting\n5. Voorval-rapportering"
        }
      },
      {
        id: 'hr-terminology',
        category: 'Knowledge Base',
        question: {
          en: "What are important HR terms to know?",
          af: "Watter belangrike MH-terme moet ek ken?"
        },
        answer: {
          en: "Essential HR terminology:\n\n1. Compensation & Benefits\n- Base salary: Fixed regular payment\n- Variable pay: Performance-based rewards\n- Benefits package: Health, retirement, etc.\n\n2. Employment Terms\n- Full-time equivalent (FTE)\n- Contract types: Permanent, fixed-term\n- Notice periods and terms\n\n3. Performance Management\n- KPIs: Key Performance Indicators\n- Performance improvement plans (PIPs)\n- Development objectives",
          af: "Noodsaaklike MH-terminologie:\n\n1. Vergoeding & Voordele\n- Basiese salaris: Vaste gereelde betaling\n- Veranderlike betaling: Prestasiegebaseerde belonings\n- Voordelepakket: Gesondheid, aftrede, ens.\n\n2. Diensvoorwaardes\n- Voltydse ekwivalent (VE)\n- Kontraktipes: Permanent, vastetermyn\n- Kennisgewingperiodes en voorwaardes\n\n3. Prestasiebestuur\n- SPIs: Sleutelprestasie-aanwysers\n- Prestasieverbeteringsplanne (PVPs)\n- Ontwikkelingsdoelwitte"
        }
      },
      {
        id: 'hr-best-practices',
        category: 'Best Practices',
        question: {
          en: "What are current HR best practices?",
          af: "Wat is huidige MH beste praktyke?"
        },
        answer: {
          en: "HR best practices:\n\n1. Employee Experience\n- Regular engagement surveys\n- Wellness programs\n- Career development paths\n\n2. Digital HR\n- HR analytics implementation\n- Self-service portals\n- Digital onboarding\n\n3. Compliance & Ethics\n- Regular policy updates\n- Ethics training\n- Compliance monitoring",
          af: "MH beste praktyke:\n\n1. Werknemerervaring\n- Gereelde betrokkenheid opnames\n- Welstandsprogramme\n- Loopbaanontwikkelingspaaie\n\n2. Digitale MH\n- MH-analise implementering\n- Selfdiensportale\n- Digitale induksie\n\n3. Nakoming & Etiek\n- Gereelde beleidsopdaterings\n- Etiekopleiding\n- Nakomingsmonitering"
        }
      }
    ]
  },
  {
    id: 'accounting',
    name: 'FinBot',
    icon: 'Calculator',
    description: {
      en: 'Financial advice and accounting guidance',
      af: 'Finansiële advies en rekeningkundige leiding'
    },
    industry: 'Accounting',
    category: 'Professional Services',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Hello! I'm your financial advisor bot. How can I assist you with financial matters?",
      af: "Hallo! Ek is jou finansiële adviseur-bot. Hoe kan ek jou help met finansiële sake?"
    },
    commonQuestions: [
      {
        id: 'tax-planning',
        category: 'Tax Management',
        question: {
          en: "What are the key tax planning strategies for businesses?",
          af: "Wat is die belangrikste belastingbeplanningstrategieë vir besighede?"
        },
        answer: {
          en: "Key tax planning strategies include:\n\n1. Timing of Income and Expenses\n- Defer income to next year when possible\n- Accelerate deductible expenses\n\n2. Business Structure Optimization\n- Choose the right business entity\n- Consider tax implications of structure\n\n3. Employee Benefits\n- Implement tax-advantaged benefits\n- Consider retirement plan options\n\n4. Asset Management\n- Strategic timing of asset purchases\n- Depreciation planning\n\n5. Record Keeping\n- Maintain detailed financial records\n- Track all business expenses",
          af: "Belangrikste belastingbeplanningstrategieë sluit in:\n\n1. Tydsberekening van Inkomste en Uitgawes\n- Stel inkomste uit na volgende jaar waar moontlik\n- Versnel aftrekbare uitgawes\n\n2. Besigheidstruktuur Optimalisering\n- Kies die regte besigheidsentiteit\n- Oorweeg belastingimplikasies van struktuur\n\n3. Werknemervoordele\n- Implementeer belastingvoordelige voordele\n- Oorweeg aftreeplanopsies\n\n4. Batebestuur\n- Strategiese tydsberekening van bate-aankope\n- Depresiasie-beplanning\n\n5. Rekordhouding\n- Hou gedetailleerde finansiële rekords\n- Volg alle besigheidsuitgawes"
        }
      },
      {
        id: 'financial-statements',
        category: 'Financial Reporting',
        question: {
          en: "How do I interpret financial statements effectively?",
          af: "Hoe interpreteer ek finansiële state effektief?"
        },
        answer: {
          en: "To interpret financial statements effectively:\n\n1. Balance Sheet Analysis\n- Review assets vs. liabilities\n- Check working capital ratio\n- Evaluate debt-to-equity ratio\n\n2. Income Statement Review\n- Analyze revenue trends\n- Examine profit margins\n- Compare operating expenses\n\n3. Cash Flow Assessment\n- Monitor operating cash flow\n- Review investment activities\n- Check financing activities\n\n4. Key Ratios\n- Liquidity ratios\n- Profitability ratios\n- Efficiency ratios",
          af: "Om finansiële state effektief te interpreteer:\n\n1. Balansstaat Analise\n- Hersien bates vs. laste\n- Kontroleer bedryfskapitaalverhouding\n- Evalueer skuld-tot-ekwiteit verhouding\n\n2. Inkomstestaat Oorsig\n- Analiseer inkomste tendense\n- Ondersoek winsmarge\n- Vergelyk bedryfsuitgawes\n\n3. Kontantvloei Assessering\n- Monitor bedryfskontantvloei\n- Hersien beleggingsaktiwiteite\n- Kontroleer finansieringsaktiwiteite\n\n4. Sleutelverhoudings\n- Likiditeitsverhoudings\n- Winsgewendheidsverhoudings\n- Doeltreffendheidsverhoudings"
        }
      },
      {
        id: 'finance-terminology',
        category: 'Financial Knowledge',
        question: {
          en: "What are key financial terms?",
          af: "Wat is belangrike finansiële terme?"
        },
        answer: {
          en: "Financial terminology:\n\n1. Financial Statements\n- Balance Sheet: Assets, liabilities, equity\n- Income Statement: Revenue, expenses, profit\n- Cash Flow: Operating, investing, financing\n\n2. Financial Ratios\n- Liquidity ratios: Current ratio, quick ratio\n- Profitability: ROI, profit margin\n- Efficiency: Asset turnover\n\n3. Investment Terms\n- Capital expenditure (CAPEX)\n- Operating expenses (OPEX)\n- Return on Investment (ROI)",
          af: "Finansiële terminologie:\n\n1. Finansiële State\n- Balansstaat: Bates, laste, ekwiteit\n- Inkomstestaat: Inkomste, uitgawes, wins\n- Kontantvloei: Bedryfs, belegging, finansiering\n\n2. Finansiële Verhoudings\n- Likiditeitsverhoudings: Huidige verhouding\n- Winsgewendheid: ROI, winsmarge\n- Doeltreffendheid: Bateomset\n\n3. Beleggingsterme\n- Kapitaaluitgawes (CAPEX)\n- Bedryfsuitgawes (OPEX)\n- Opbrengs op Belegging (ROI)"
        }
      },
      {
        id: 'financial-best-practices',
        category: 'Best Practices',
        question: {
          en: "What are financial management best practices?",
          af: "Wat is finansiële bestuur beste praktyke?"
        },
        answer: {
          en: "Financial management practices:\n\n1. Budgeting & Forecasting\n- Zero-based budgeting\n- Rolling forecasts\n- Variance analysis\n\n2. Risk Management\n- Diversification strategies\n- Hedging techniques\n- Insurance coverage\n\n3. Internal Controls\n- Segregation of duties\n- Authorization levels\n- Regular audits",
          af: "Finansiële bestuurspraktyke:\n\n1. Begroting & Vooruitskatting\n- Zero-gebaseerde begroting\n- Rollende vooruitskattings\n- Variansie-analise\n\n2. Risikobestuur\n- Diversifikasiestrategie\n- Verskansingstegnieke\n- Versekeringsdekking\n\n3. Interne Kontroles\n- Skeiding van pligte\n- Magtigingsvlakke\n- Gereelde oudits"
        }
      }
    ]
  },
  {
    id: 'business',
    name: 'BizBot',
    icon: 'Briefcase',
    description: 'Strategic business planning and management advice',
    industry: 'Business',
    category: 'Business Services',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Welcome! I'm your business strategy assistant. How can I help grow your business?",
      af: "Welkom! Ek is jou besigheidstrategie-assistent. Hoe kan ek help om jou besigheid te laat groei?"
    },
    commonQuestions: [
      {
        id: 'business-plan',
        category: 'Strategic Planning',
        question: {
          en: "How do I create an effective business plan?",
          af: "Hoe skep ek 'n effektiewe besigheidsplan?"
        },
        answer: {
          en: "A comprehensive business plan should include:\n\n1. Executive Summary\n- Business concept\n- Goals and objectives\n- Market opportunity\n\n2. Market Analysis\n- Target market definition\n- Competitor analysis\n- Market trends\n\n3. Business Model\n- Revenue streams\n- Cost structure\n- Value proposition\n\n4. Marketing Strategy\n- Pricing strategy\n- Distribution channels\n- Promotion plans\n\n5. Financial Projections\n- Startup costs\n- Revenue forecasts\n- Break-even analysis",
          af: "n Omvattende besigheidsplan moet insluit:\n\n1. Uitvoerende Opsomming\n- Besigheidskonsep\n- Doelwitte en doelstellings\n- Markgeleentheid\n\n2. Markanalise\n- Teikenmark definisie\n- Mededinger-analise\n- Marktendense\n\n3. Besigheidsmodel\n- Inkomstestrome\n- Kostestruktuur\n- Waardeproposisie\n\n4. Bemarkingstrategie\n- Prysstrategie\n- Verspreidingskanale\n- Promosie-planne\n\n5. Finansiële Projeksies\n- Aanvangskoste\n- Inkomstevooruitskattings\n- Gelykbreekanalise"
        }
      },
      {
        id: 'market-analysis',
        category: 'Strategy',
        question: {
          en: "How to conduct market analysis?",
          af: "Hoe voer ek markanalise uit?"
        },
        answer: {
          en: "Market analysis steps:\n1. Define target market\n2. Analyze competitors\n3. Identify trends\n4. Assess market size\n5. Understand customer needs\n6. Evaluate market gaps",
          af: "Markanalise stappe:\n1. Definieer teikenmark\n2. Analiseer mededingers\n3. Identifiseer tendense\n4. Assesseer markgrootte\n5. Verstaan kliënte behoeftes\n6. Evalueer markgapings"
        }
      },
      {
        id: 'growth-strategies',
        category: 'Development',
        question: {
          en: "What are effective growth strategies?",
          af: "Wat is effektiewe groeistrategieë?"
        },
        answer: {
          en: "Business growth strategies:\n1. Market penetration\n2. Product development\n3. Market expansion\n4. Strategic partnerships\n5. Digital transformation",
          af: "Besigheidsgroei strategieë:\n1. Markpenetrasie\n2. Produkontwikkeling\n3. Markuitbreiding\n4. Strategiese vennootskappe\n5. Digitale transformasie"
        }
      },
      {
        id: 'risk-management',
        category: 'Management',
        question: {
          en: "How to manage business risks?",
          af: "Hoe bestuur ek besigheidsrisiko's?"
        },
        answer: {
          en: "Risk management process:\n1. Risk identification\n2. Impact assessment\n3. Mitigation strategies\n4. Monitoring systems\n5. Contingency planning",
          af: "Risikobestuursproses:\n1. Risiko-identifikasie\n2. Impakbeoordeling\n3. Versagtingstrategieë\n4. Moniteringstelsels\n5. Gebeurlikheidsbeplanning"
        }
      },
      {
        id: 'digital-transformation',
        category: 'Technology',
        question: {
          en: "How to implement digital transformation?",
          af: "Hoe implementeer ek digitale transformasie?"
        },
        answer: {
          en: "Digital transformation steps:\n1. Assess current state\n2. Set digital goals\n3. Choose technologies\n4. Train staff\n5. Monitor progress",
          af: "Digitale transformasie stappe:\n1. Evalueer huidige staat\n2. Stel digitale doelwitte\n3. Kies tegnologieë\n4. Lei personeel op\n5. Monitor vordering"
        }
      }
    ]
  },
  {
    id: 'education',
    name: 'EduBot',
    icon: 'GraduationCap',
    description: 'Educational guidance and academic planning',
    industry: 'Education',
    category: 'Education',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Hi! I'm your education guide. How can I help with your learning journey?",
      af: "Hi! Ek is jou onderwyssgids. Hoe kan ek help met jou leerreis?"
    },
    commonQuestions: [
      {
        id: 'learning-styles',
        category: 'Teaching Methods',
        question: {
          en: "How to accommodate different learning styles?",
          af: "Hoe akkommodeer ek verskillende leerstyle?"
        },
        answer: {
          en: "Accommodate learning styles through:\n1. Visual aids\n2. Hands-on activities\n3. Audio materials\n4. Group discussions\n5. Written exercises",
          af: "Akkommodeer leerstyle deur:\n1. Visuele hulpmiddels\n2. Praktiese aktiwiteite\n3. Oudio-materiaal\n4. Groepbesprekings\n5. Skriftelike oefeninge"
        }
      },
      {
        id: 'curriculum-planning',
        category: 'Planning',
        question: {
          en: "How to create an effective curriculum?",
          af: "Hoe skep ek 'n effektiewe kurrikulum?"
        },
        answer: {
          en: "Curriculum planning steps:\n1. Set learning objectives\n2. Choose teaching methods\n3. Plan assessments\n4. Include diverse materials\n5. Regular review and updates",
          af: "Kurrikulumbeplanningstappe:\n1. Stel leerdoelwitte\n2. Kies onderrigmetodes\n3. Beplan assesserings\n4. Sluit diverse materiaal in\n5. Gereelde hersiening en opdaterings"
        }
      },
      {
        id: 'assessment-methods',
        category: 'Evaluation',
        question: {
          en: "What are effective assessment methods?",
          af: "Wat is effektiewe assesseringsmetodes?"
        },
        answer: {
          en: "Assessment frameworks:\n\n1. Formative Assessment\n- Continuous feedback\n- Progress monitoring\n- Adaptive teaching\n\n2. Summative Assessment\n- Final examinations\n- Project evaluations\n- Portfolio reviews\n\n3. Performance Metrics\n- Learning outcomes\n- Skill acquisition\n- Knowledge retention",
          af: "Assesseringsraamwerke:\n\n1. Formatiewe Assessering\n- Deurlopende terugvoer\n- Vordering monitering\n- Aanpasbare onderrig\n\n2. Summatiewe Assessering\n- Finale eksamens\n- Projek evaluerings\n- Portefeulje oorsigte\n\n3. Prestasie Metrieke\n- Leeruitkomste\n- Vaardigheidsverwerwing\n- Kennisretensie"
        }
      },
      {
        id: 'education-technology',
        category: 'EdTech',
        question: {
          en: "How to integrate technology in education?",
          af: "Hoe integreer ek tegnologie in onderwys?"
        },
        answer: {
          en: "Educational technology integration:\n\n1. Digital Tools\n- Learning management systems\n- Interactive platforms\n- Assessment software\n\n2. Implementation Strategy\n- Teacher training\n- Infrastructure setup\n- Support systems\n\n3. Best Practices\n- Blended learning approach\n- Digital literacy development\n- Accessibility considerations",
          af: "Onderwystegnologie integrasie:\n\n1. Digitale Gereedskap\n- Leerbestuurstelsels\n- Interaktiewe platforms\n- Assessering sagteware\n\n2. Implementeringstrategie\n- Onderwyser opleiding\n- Infrastruktuur opstelling\n- Ondersteuningstelsels\n\n3. Beste Praktyke\n- Gemengde leer benadering\n- Digitale geletterdheid ontwikkeling\n- Toeganklikheid oorwegings"
        }
      }
    ]
  },
  {
    id: 'construction',
    name: 'BuildBot',
    icon: 'Hammer',
    description: 'Construction and project management expertise',
    industry: 'Construction',
    category: 'Industry & Construction',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Welcome! I'm your construction and project management assistant. How can I help?",
      af: "Welkom! Ek is jou konstruksie- en projekbestuur-assistent. Hoe kan ek help?"
    },
    commonQuestions: [
      {
        id: 'project-planning',
        category: 'Project Management',
        question: {
          en: "What are key project planning steps?",
          af: "Wat is die belangrikste projekbeplanningstappe?"
        },
        answer: {
          en: "Essential project planning steps:\n1. Define project scope\n2. Create timeline and milestones\n3. Resource allocation\n4. Risk assessment\n5. Budget planning\n6. Quality control measures",
          af: "Noodsaaklike projekbeplanningstappe:\n1. Definieer projekomvang\n2. Skep tydlyn en mylpale\n3. Hulpbrontoewysing\n4. Risiko-assessering\n5. Begrotingsbeplanning\n6. Gehaltebeheermaatreëls"
        }
      },
      {
        id: 'safety-regulations',
        category: 'Safety',
        question: {
          en: "What are essential safety regulations?",
          af: "Wat is noodsaaklike veiligheidsregulasies?"
        },
        answer: {
          en: "Key safety regulations:\n1. Personal protective equipment (PPE)\n2. Fall protection systems\n3. Hazard communication\n4. Emergency procedures\n5. Equipment safety protocols",
          af: "Belangrike veiligheidsregulasies:\n1. Persoonlike beskermingstoerusting (PBT)\n2. Valbeskerming stelsels\n3. Gevaar-kommunikasie\n4. Noodprosedures\n5. Toerusting veiligheidsprotokolle"
        }
      },
      {
        id: 'cost-estimation',
        category: 'Financial',
        question: {
          en: "How to create accurate cost estimates?",
          af: "Hoe skep ek akkurate kosteberamings?"
        },
        answer: {
          en: "Cost estimation process:\n1. Material quantity takeoff\n2. Labor cost calculation\n3. Equipment expenses\n4. Overhead costs\n5. Contingency planning",
          af: "Kosteberamingsproses:\n1. Materiaal hoeveelheid opname\n2. Arbeidskoste berekening\n3. Toerusting uitgawes\n4. Oorhoofse koste\n5. Gebeurlikheidsplan"
        }
      },
      {
        id: 'quality-control',
        category: 'Quality',
        question: {
          en: "How to maintain construction quality?",
          af: "Hoe handhaaf ek konstruksie-kwaliteit?"
        },
        answer: {
          en: "Quality control measures:\n1. Regular inspections\n2. Material testing\n3. Documentation review\n4. Compliance checks\n5. Corrective action procedures",
          af: "Kwaliteitsbeheermaatreëls:\n1. Gereelde inspeksies\n2. Materiaaltoetsing\n3. Dokumentasie-hersiening\n4. Nakomingskontroles\n5. Korrektiewe aksieprosedures"
        }
      },
      {
        id: 'construction-terms',
        category: 'Technical Knowledge',
        question: {
          en: "What are important construction terms?",
          af: "Wat is belangrike konstruksieterme?"
        },
        answer: {
          en: "Construction terminology:\n\n1. Structural Elements\n- Foundation types: Strip, raft, pile\n- Load-bearing components\n- Support systems\n\n2. Building Materials\n- Concrete grades and uses\n- Steel specifications\n- Timber classifications\n\n3. Project Phases\n- Pre-construction planning\n- Construction execution\n- Post-construction evaluation",
          af: "Konstruksieterminologie:\n\n1. Strukturele Elemente\n- Fondasie tipes: Strook, vlot, heipaal\n- Draende komponente\n- Ondersteuningstelsels\n\n2. Boumateriaal\n- Beton grade en gebruike\n- Staal spesifikasies\n- Hout klassifikasies\n\n3. Projekfases\n- Voor-konstruksie beplanning\n- Konstruksie uitvoering\n- Na-konstruksie evaluering"
        }
      }
    ]
  },
  {
    id: 'hospitality',
    name: 'HospitalityBot',
    icon: 'ChefHat',
    description: 'Restaurant and hospitality management guidance',
    industry: 'Hospitality',
    category: 'Hospitality & Tourism',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Hello! I'm your hospitality management assistant. How can I help improve your service?",
      af: "Hallo! Ek is jou gasvryheidbestuur-assistent. Hoe kan ek help om jou diens te verbeter?"
    },
    commonQuestions: [
      {
        id: 'customer-service',
        category: 'Service Excellence',
        question: {
          en: "How to improve customer service?",
          af: "Hoe verbeter ek kliëntediens?"
        },
        answer: {
          en: "Customer service improvement:\n1. Staff training programs\n2. Feedback collection\n3. Service standards\n4. Problem resolution\n5. Guest experience enhancement",
          af: "Kliëntediens verbetering:\n1. Personeelopleiding programme\n2. Terugvoer versameling\n3. Diensstandaarde\n4. Probleemoplossing\n5. Gasservaring verbetering"
        }
      },
      {
        id: 'food-safety',
        category: 'Safety & Hygiene',
        question: {
          en: "What are essential food safety practices?",
          af: "Wat is noodsaaklike voedselveiligheidspraktyke?"
        },
        answer: {
          en: "Food safety essentials:\n1. Temperature control\n2. Storage procedures\n3. Cleaning protocols\n4. Cross-contamination prevention\n5. Personal hygiene",
          af: "Voedselveiligheid noodsaaklikhede:\n1. Temperatuurbeheer\n2. Storingsprosedures\n3. Skoonmaakprotokolle\n4. Kruiskontaminasie voorkoming\n5. Persoonlike higiëne"
        }
      },
      {
        id: 'revenue-management',
        category: 'Financial',
        question: {
          en: "How to optimize revenue management?",
          af: "Hoe optimaliseer ek inkomstebestuur?"
        },
        answer: {
          en: "Revenue optimization strategies:\n1. Dynamic pricing\n2. Demand forecasting\n3. Inventory management\n4. Distribution channels\n5. Competitive analysis",
          af: "Inkomste-optimalisering strategieë:\n1. Dinamiese prysbepaling\n2. Aanvraagvooruitskatting\n3. Vooraadbeheer\n4. Verspreidingskanale\n5. Mededingende analise"
        }
      },
      {
        id: 'staff-management',
        category: 'HR',
        question: {
          en: "How to manage hospitality staff effectively?",
          af: "Hoe bestuur ek gasvryheidspersoneel effektief?"
        },
        answer: {
          en: "Staff management tips:\n1. Clear job descriptions\n2. Training programs\n3. Performance reviews\n4. Schedule optimization\n5. Team building",
          af: "Personeelbestuur wenke:\n1. Duidelike posbeskrywings\n2. Opleidingsprogramme\n3. Prestasie-oorsigte\n4. Skedule-optimalisering\n5. Spanbou"
        }
      }
    ]
  },
  {
    id: 'travel',
    name: 'TravelBot',
    icon: 'Plane',
    description: 'Travel and tourism industry expertise',
    industry: 'Travel',
    category: 'Hospitality & Tourism',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Hi! I'm your travel and tourism expert. Where would you like to explore?",
      af: "Hi! Ek is jou reis- en toerisme-kenner. Waarheen wil jy verken?"
    },
    commonQuestions: [
      {
        id: 'destination-planning',
        category: 'Planning',
        question: {
          en: "How to plan the perfect itinerary?",
          af: "Hoe beplan ek die perfekte reisplan?"
        },
        answer: {
          en: "Itinerary planning tips:\n1. Research peak seasons\n2. Set realistic timeframes\n3. Balance activities\n4. Include local experiences\n5. Plan transportation\n6. Allow flexibility",
          af: "Reisplan beplanning wenke:\n1. Navorsing van piekseisoen\n2. Stel realistiese tydsrame\n3. Balanseer aktiwiteite\n4. Sluit plaaslike ervarings in\n5. Beplan vervoer\n6. Laat buigsaamheid toe"
        }
      },
      {
        id: 'travel-safety',
        category: 'Safety',
        question: {
          en: "What are essential travel safety tips?",
          af: "Wat is noodsaaklike reisveiligheidswenke?"
        },
        answer: {
          en: "Travel safety essentials:\n1. Research destinations\n2. Keep documents secure\n3. Stay health-conscious\n4. Monitor local conditions\n5. Emergency contact list",
          af: "Reisveiligheid noodsaaklikhede:\n1. Navorsing bestemmings\n2. Hou dokumente veilig\n3. Bly gesondheidsbewus\n4. Monitor plaaslike toestande\n5. Noodkontaklys"
        }
      },
      {
        id: 'budget-travel',
        category: 'Financial',
        question: {
          en: "How to travel on a budget?",
          af: "Hoe reis ek op 'n begroting?"
        },
        answer: {
          en: "Budget travel strategies:\n1. Book in advance\n2. Use price comparison tools\n3. Travel in off-season\n4. Consider alternative accommodation\n5. Local transportation options",
          af: "Begrotingsreis strategieë:\n1. Bespreek vooruit\n2. Gebruik prysvergelykings\n3. Reis buite seisoen\n4. Oorweeg alternatiewe verblyf\n5. Plaaslike vervoeropsies"
        }
      },
      {
        id: 'cultural-experience',
        category: 'Cultural',
        question: {
          en: "How to experience local culture authentically?",
          af: "Hoe ervaar ek plaaslike kultuur outentiek?"
        },
        answer: {
          en: "Cultural immersion tips:\n1. Learn basic phrases\n2. Try local cuisine\n3. Attend local events\n4. Visit markets\n5. Engage with locals",
          af: "Kulturele onderdompeling wenke:\n1. Leer basiese frases\n2. Probeer plaaslike kos\n3. Woon plaaslike gebeurtenisse by\n4. Besoek markte\n5. Skakel in met plaaslike inwoners"
        }
      }
    ]
  },
  {
    id: 'marketing',
    name: 'MarketingBot',
    icon: 'LineChart',
    description: 'Digital marketing and brand strategy expertise',
    industry: 'Marketing',
    category: 'Professional Services',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Hello! I'm your marketing strategy assistant. How can I help grow your brand today?",
      af: "Hallo! Ek is jou bemarkingstrategie-assistent. Hoe kan ek vandag help om jou handelsmerk te laat groei?"
    },
    commonQuestions: [
      {
        id: 'digital-strategy',
        category: 'Digital Marketing',
        question: {
          en: "How to create a digital marketing strategy?",
          af: "Hoe skep ek 'n digitale bemarkingstrategie?"
        },
        answer: {
          en: "Digital marketing strategy steps:\n1. Define target audience\n2. Set SMART goals\n3. Choose marketing channels\n4. Create content strategy\n5. Set budget allocation\n6. Implement analytics tracking",
          af: "Digitale bemarkingstrategie stappe:\n1. Definieer teikengehoor\n2. Stel SMART-doelwitte\n3. Kies bemarkingskanale\n4. Skep inhoudstrategie\n5. Stel begroting toe\n6. Implementeer analise-opsporing"
        }
      },
      {
        id: 'social-media',
        category: 'Social Media',
        question: {
          en: "What's an effective social media strategy?",
          af: "Wat is 'n effektiewe sosiale media strategie?"
        },
        answer: {
          en: "Social media best practices:\n1. Platform selection based on audience\n2. Content calendar planning\n3. Engagement strategies\n4. Paid advertising approach\n5. Performance monitoring",
          af: "Sosiale media beste praktyke:\n1. Platform-keuse gebaseer op gehoor\n2. Inhoudkalenderbeplanning\n3. Betrokkenheidstrategieë\n4. Betaalde advertensiebenadering\n5. Prestasiemonitering"
        }
      },
      {
        id: 'marketing-metrics',
        category: 'Analytics',
        question: {
          en: "What are key marketing KPIs to track?",
          af: "Watter belangrike bemarkings-KPIs moet gemonitor word?"
        },
        answer: {
          en: "Essential marketing metrics:\n\n1. Acquisition Metrics\n- Customer Acquisition Cost (CAC)\n- Conversion rates\n- Traffic sources\n\n2. Engagement Metrics\n- Click-through rates\n- Time on site\n- Bounce rates\n\n3. Revenue Metrics\n- Return on Ad Spend (ROAS)\n- Customer Lifetime Value (CLV)\n- Revenue per customer\n\n4. Social Metrics\n- Engagement rates\n- Reach and impressions\n- Share of voice",
          af: "Noodsaaklike bemarkingsmetrieke:\n\n1. Verkrygingsmetrieke\n- Kliëntverkrygingskoste (KVK)\n- Omsettingskoerse\n- Verkeerbronne\n\n2. Betrokkenheidsmetrieke\n- Deurklikkoerse\n- Tyd op werf\n- Wegspringkoerse\n\n3. Inkomstemetrieke\n- Opbrengs op Advertensiebesteding (ROAB)\n- Kliëntlewenswaarde (KLW)\n- Inkomste per kliënt\n\n4. Sosiale Metrieke\n- Betrokkenheidskoerse\n- Bereik en indrukke\n- Stem-aandeel"
        }
      }
    ]
  },
  {
    id: 'it',
    name: 'TechBot',
    icon: 'Code',
    description: 'IT and software development guidance',
    industry: 'Technology',
    category: 'Professional Services',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Welcome! I'm your IT and development assistant. How can I help with your technical challenges?",
      af: "Welkom! Ek is jou IT- en ontwikkelingsassistent. Hoe kan ek help met jou tegniese uitdagings?"
    },
    commonQuestions: [
      {
        id: 'system-architecture',
        category: 'Development',
        question: {
          en: "How to design scalable system architecture?",
          af: "Hoe ontwerp ek skaalbare stelselargitektuur?"
        },
        answer: {
          en: "System architecture principles:\n1. Microservices approach\n2. Load balancing\n3. Caching strategies\n4. Database optimization\n5. Security implementation\n6. Monitoring setup",
          af: "Stelselargitektuur beginsels:\n1. Mikrodienste-benadering\n2. Lasbalansering\n3. Kasstrategieë\n4. Databasis-optimalisering\n5. Sekuriteitsimplementering\n6. Moniteringsopstelling"
        }
      },
      {
        id: 'cloud-architecture',
        category: 'Cloud Computing',
        question: {
          en: "What are cloud architecture best practices?",
          af: "Wat is wolkargitektuur beste praktyke?"
        },
        answer: {
          en: "Cloud architecture principles:\n\n1. Scalability\n- Auto-scaling configuration\n- Load balancing setup\n- Resource optimization\n\n2. Security\n- Identity management\n- Encryption standards\n- Network security\n\n3. Cost Optimization\n- Resource rightsizing\n- Reserved instances\n- Cost monitoring\n\n4. Reliability\n- Multi-zone deployment\n- Disaster recovery\n- Backup strategies",
          af: "Wolkargitektuur beginsels:\n\n1. Skaalbaarheid\n- Outoskaling konfigurasie\n- Lasbalansering opstelling\n- Hulpbron optimalisering\n\n2. Sekuriteit\n- Identiteitsbestuur\n- Enkripsiestandaarde\n- Netwerksekuriteit\n\n3. Koste-optimalisering\n- Hulpbron regte grootte\n- Gereserveerde instansies\n- Kostemonitoring\n\n4. Betroubaarheid\n- Multi-sone ontplooiing\n- Rampherstel\n- Rugsteunstrategieë"
        }
      }
    ]
  },
  {
    id: 'consulting',
    name: 'ConsultingBot',
    icon: 'Briefcase',
    description: 'Management consulting and strategy advice',
    industry: 'Consulting',
    category: 'Professional Services',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Hello! I'm your management consulting assistant. Ready to help optimize your business strategy.",
      af: "Hallo! Ek is jou bestuurskonsultasie-assistent. Gereed om jou besigheidstrategie te optimaliseer."
    },
    commonQuestions: [
      {
        id: 'business-strategy',
        category: 'Strategy',
        question: {
          en: "How to develop a business strategy?",
          af: "Hoe ontwikkel ek 'n besigheidstrategie?"
        },
        answer: {
          en: "Strategic planning process:\n1. Market analysis\n2. Competitive positioning\n3. Value proposition\n4. Resource allocation\n5. Implementation roadmap\n6. Performance metrics",
          af: "Strategiese beplanningsproses:\n1. Markanalise\n2. Mededingende posisionering\n3. Waardeproposisie\n4. Hulpbrontoewysing\n5. Implementeringspadkaart\n6. Prestasie-metrics"
        }
      }
    ]
  },
  {
    id: 'research',
    name: 'ResearchBot',
    icon: 'Search',
    description: 'Academic research and methodology guidance',
    industry: 'Research',
    category: 'Academic & Research',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Welcome! I'm your research methodology assistant. How can I help with your research project?",
      af: "Welkom! Ek is jou navorsingsmetodologie-assistent. Hoe kan ek help met jou navorsingsprojek?"
    },
    commonQuestions: [
      {
        id: 'research-design',
        category: 'Methodology',
        question: {
          en: "How to design a research study?",
          af: "Hoe ontwerp ek 'n navorsingstudie?"
        },
        answer: {
          en: "Research design process:\n\n1. Research Question Development\n- Problem identification\n- Literature review\n- Gap analysis\n- Research objectives\n\n2. Methodology Selection\n- Quantitative vs qualitative\n- Mixed methods approach\n- Data collection methods\n\n3. Sampling Strategy\n- Population definition\n- Sample size calculation\n- Sampling techniques",
          af: "Navorsingsontwerp proses:\n\n1. Navorsingsvraag Ontwikkeling\n- Probleemidentifikasie\n- Literatuuroorsig\n- Gapingsanalise\n- Navorsingsdoelwitte\n\n2. Metodologie Keuse\n- Kwantitatief vs kwalitatief\n- Gemengde metodes benadering\n- Data-insamelingsmetodes\n\n3. Steekproefstrategie\n- Populasie definisie\n- Steekproefgrootte berekening\n- Steekproeftegnieke"
        }
      }
    ]
  },
  {
    id: 'datascience',
    name: 'DataBot',
    icon: 'BarChart',
    description: 'Data science and analytics expertise',
    industry: 'Data Science',
    category: 'Technology',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Hello! I'm your data science assistant. How can I help analyze your data today?",
      af: "Hallo! Ek is jou datawetenskapassistent. Hoe kan ek vandag help om jou data te analiseer?"
    },
    commonQuestions: [
      {
        id: 'data-analysis',
        category: 'Analytics',
        question: {
          en: "What are key steps in data analysis?",
          af: "Wat is die belangrikste stappe in data-analise?"
        },
        answer: {
          en: "Data analysis framework:\n\n1. Data Collection\n- Source identification\n- Data quality assessment\n- Collection methods\n\n2. Data Preprocessing\n- Cleaning techniques\n- Feature engineering\n- Normalization\n\n3. Analysis Methods\n- Statistical analysis\n- Machine learning models\n- Visualization techniques\n\n4. Interpretation\n- Results validation\n- Insights extraction\n- Recommendations",
          af: "Data-analise raamwerk:\n\n1. Data-insameling\n- Bronidentifikasie\n- Datakwaliteit assessering\n- Insamelingsmetodes\n\n2. Data Voorverwerking\n- Skoonmaaktegnieke\n- Kenmerkingenieurswese\n- Normalisering\n\n3. Analise Metodes\n- Statistiese analise\n- Masjienleermodelle\n- Visualiseringstegnieke\n\n4. Interpretasie\n- Resultaatvalidering\n- Insigekstraksie\n- Aanbevelings"
        }
      },
      {
        id: 'machine-learning',
        category: 'Advanced Analytics',
        question: {
          en: "What are key machine learning concepts?",
          af: "Wat is belangrike masjienleer konsepte?"
        },
        answer: {
          en: "Machine learning fundamentals:\n\n1. Supervised Learning\n- Classification algorithms\n- Regression methods\n- Model validation\n\n2. Unsupervised Learning\n- Clustering techniques\n- Dimensionality reduction\n- Pattern recognition\n\n3. Model Evaluation\n- Cross-validation\n- Performance metrics\n- Hyperparameter tuning",
          af: "Masjienleer grondbeginsels:\n\n1. Begeleide Leer\n- Klassifikasie algoritmes\n- Regressie metodes\n- Model validering\n\n2. Onbegeleide Leer\n- Groepering tegnieke\n- Dimensionaliteit vermindering\n- Patroonherkenning\n\n3. Model Evaluering\n- Kruisvalidering\n- Prestasie metrieke\n- Hiperparameter instelling"
        }
      },
      {
        id: 'data-visualization',
        category: 'Visualization',
        question: {
          en: "How to create effective data visualizations?",
          af: "Hoe skep ek effektiewe data visualiserings?"
        },
        answer: {
          en: "Data visualization principles:\n\n1. Chart Selection\n- Purpose alignment\n- Data type considerations\n- Audience needs\n\n2. Design Elements\n- Color theory\n- Layout principles\n- Interactive features\n\n3. Best Practices\n- Data-ink ratio\n- Cognitive load\n- Accessibility standards",
          af: "Data visualisering beginsels:\n\n1. Grafiek Keuse\n- Doel belyning\n- Data tipe oorwegings\n- Gehoor behoeftes\n\n2. Ontwerp Elemente\n- Kleurteorie\n- Uitlegbeginsels\n- Interaktiewe kenmerke\n\n3. Beste Praktyke\n- Data-ink verhouding\n- Kognitiewe las\n- Toeganklikheidstandaarde"
        }
      },
      {
        id: 'big-data',
        category: 'Infrastructure',
        question: {
          en: "How to handle big data processing?",
          af: "Hoe hanteer ek groot data verwerking?"
        },
        answer: {
          en: "Big data architecture:\n\n1. Data Storage\n- Distributed systems\n- Data lakes\n- Cloud solutions\n\n2. Processing Framework\n- Batch processing\n- Stream processing\n- Real-time analytics\n\n3. Performance Optimization\n- Scalability planning\n- Resource management\n- Query optimization",
          af: "Groot data argitektuur:\n\n1. Data Stoor\n- Verspreide stelsels\n- Data mere\n- Wolk oplossings\n\n2. Verwerkingsraamwerk\n- Bondelverwerking\n- Stroomverwerking\n- Intydse analise\n\n3. Prestasie Optimalisering\n- Skaalbaarheid beplanning\n- Hulpbronbestuur\n- Navraag optimalisering"
        }
      }
    ]
  },
  {
    id: 'realestate',
    name: 'PropertyBot',
    icon: 'Home',
    description: 'Real estate and property management expertise',
    industry: 'Real Estate',
    category: 'Property & Development',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Welcome! I'm your real estate advisor. How can I help with your property needs?",
      af: "Welkom! Ek is jou eiendomsadviseur. Hoe kan ek help met jou eiendomsbehoeftes?"
    },
    commonQuestions: [
      {
        id: 'market-analysis',
        category: 'Analysis',
        question: {
          en: "How to analyze property market value?",
          af: "Hoe analiseer ek eiendomsmarkwaarde?"
        },
        answer: {
          en: "Property valuation factors:\n\n1. Location Analysis\n- Neighborhood demographics\n- Local amenities\n- Future development plans\n\n2. Property Assessment\n- Size and condition\n- Recent improvements\n- Unique features\n\n3. Market Comparison\n- Recent sales data\n- Similar properties\n- Market trends",
          af: "Eiendomswaardasie faktore:\n\n1. Ligging Analise\n- Buurt demografie\n- Plaaslike geriewe\n- Toekomstige ontwikkelingsplanne\n\n2. Eiendomsassessering\n- Grootte en toestand\n- Onlangse verbeterings\n- Unieke kenmerke\n\n3. Markvergelyking\n- Onlangse verkoopsdata\n- Soortgelyke eiendomme\n- Marktendense"
        }
      }
    ]
  },
  {
    id: 'sustainability',
    name: 'EcoBot',
    icon: 'Leaf',
    description: 'Environmental sustainability and green practices',
    industry: 'Environmental',
    category: 'Sustainability',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Hello! I'm your sustainability advisor. How can I help make your practices more environmentally friendly?",
      af: "Hallo! Ek is jou volhoubaarheidsadviseur. Hoe kan ek help om jou praktyke meer omgewingsvriendelik te maak?"
    },
    commonQuestions: [
      {
        id: 'green-practices',
        category: 'Implementation',
        question: {
          en: "What are key sustainable business practices?",
          af: "Wat is belangrike volhoubare besigheidspraktyke?"
        },
        answer: {
          en: "Sustainable business framework:\n\n1. Resource Management\n- Energy efficiency\n- Waste reduction\n- Water conservation\n\n2. Supply Chain\n- Sustainable sourcing\n- Ethical partnerships\n- Carbon footprint reduction\n\n3. Reporting & Metrics\n- Environmental impact\n- Sustainability goals\n- Progress tracking",
          af: "Volhoubare besigheidsraamwerk:\n\n1. Hulpbronbestuur\n- Energie-doeltreffendheid\n- Afvalvermindering\n- Waterbewaring\n\n2. Voorsieningsketting\n- Volhoubare verkryging\n- Etiese vennootskappe\n- Koolstofvoetspoor vermindering\n\n3. Verslagdoening & Metrieke\n- Omgewingsimpak\n- Volhoubaarheid doelwitte\n- Vordering volg"
        }
      }
    ]
  },
  {
    id: 'projectmanagement',
    name: 'ProjectBot',
    icon: 'ClipboardList',
    description: 'Project management and agile methodology expertise',
    industry: 'Project Management',
    category: 'Professional Services',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Welcome! I'm your project management advisor. How can I help optimize your project delivery?",
      af: "Welkom! Ek is jou projekbestuur-adviseur. Hoe kan ek help om jou projeklewering te optimaliseer?"
    },
    commonQuestions: [
      {
        id: 'agile-methodology',
        category: 'Methodology',
        question: {
          en: "How to implement Agile methodology?",
          af: "Hoe implementeer ek Agile-metodologie?"
        },
        answer: {
          en: "Agile implementation guide:\n\n1. Framework Selection\n- Scrum vs Kanban\n- Hybrid approaches\n- Team structure\n\n2. Process Setup\n- Sprint planning\n- Daily standups\n- Retrospectives\n\n3. Tools & Metrics\n- Project tracking\n- Velocity measurement\n- Burndown charts",
          af: "Agile implementeringsgids:\n\n1. Raamwerk Keuse\n- Scrum vs Kanban\n- Hibriede benaderings\n- Spanstruktuur\n\n2. Proses Opstelling\n- Sprint beplanning\n- Daaglikse standups\n- Retrospektiewes\n\n3. Gereedskap & Metrieke\n- Projeknasporing\n- Snelheid meting\n- Afbrandkaarte"
        }
      },
      {
        id: 'risk-management',
        category: 'Risk',
        question: {
          en: "How to manage project risks?",
          af: "Hoe bestuur ek projekrisiko's?"
        },
        answer: {
          en: "Risk management framework:\n\n1. Risk Identification\n- Brainstorming sessions\n- Historical analysis\n- Expert consultation\n\n2. Assessment\n- Impact evaluation\n- Probability analysis\n- Priority setting\n\n3. Mitigation Strategies\n- Preventive actions\n- Contingency plans\n- Response protocols",
          af: "Risikobestuur raamwerk:\n\n1. Risiko Identifikasie\n- Dinkskrumsessies\n- Historiese analise\n- Deskundige konsultasie\n\n2. Assessering\n- Impakevaluering\n- Waarskynlikheidsanalise\n- Prioriteitstelling\n\n3. Versagtingstrategieë\n- Voorkomende aksies\n- Gebeurlikheidsplanne\n- Reaksieprotokolle"
        }
      }
    ]
  },
  {
    id: 'design',
    name: 'DesignBot',
    icon: 'Palette',
    description: 'Digital design and UX/UI expertise',
    industry: 'Design',
    category: 'Creative Services',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Hi! I'm your digital design assistant. How can I help enhance your design process?",
      af: "Hi! Ek is jou digitale ontwerp-assistent. Hoe kan ek help om jou ontwerpproses te verbeter?"
    },
    commonQuestions: [
      {
        id: 'ux-principles',
        category: 'UX Design',
        question: {
          en: "What are key UX design principles?",
          af: "Wat is belangrike UX-ontwerpbeginsels?"
        },
        answer: {
          en: "UX design fundamentals:\n\n1. User Research\n- User personas\n- Journey mapping\n- Usability testing\n\n2. Information Architecture\n- Content hierarchy\n- Navigation patterns\n- User flows\n\n3. Interaction Design\n- Feedback mechanisms\n- Gesture controls\n- Microinteractions",
          af: "UX-ontwerp grondbeginsels:\n\n1. Gebruikersnavorsing\n- Gebruikerpersonas\n- Reiskartering\n- Bruikbaarheidstoetsing\n\n2. Inligtingargitektuur\n- Inhoudshiërargie\n- Navigasiepatrone\n- Gebruikersvloei\n\n3. Interaksie-ontwerp\n- Terugvoermeganismes\n- Gebaarbeheer\n- Mikro-interaksies"
        }
      }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'SecurityBot',
    icon: 'Lock',
    description: 'Cybersecurity and digital protection expertise',
    industry: 'Security',
    category: 'Technology',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Welcome! I'm your cybersecurity advisor. How can I help protect your digital assets?",
      af: "Welkom! Ek is jou kuberveiligheidsadviseur. Hoe kan ek help om jou digitale bates te beskerm?"
    },
    commonQuestions: [
      {
        id: 'security-best-practices',
        category: 'Security',
        question: {
          en: "What are essential cybersecurity practices?",
          af: "Wat is noodsaaklike kuberveiligheidspraktyke?"
        },
        answer: {
          en: "Cybersecurity framework:\n\n1. Access Control\n- Multi-factor authentication\n- Role-based access\n- Password policies\n\n2. Network Security\n- Firewall configuration\n- Encryption protocols\n- VPN implementation\n\n3. Threat Detection\n- Security monitoring\n- Incident response\n- Regular audits",
          af: "Kuberveiligheidsraamwerk:\n\n1. Toegangsbeheer\n- Multi-faktor verifikasie\n- Rolgebaseerde toegang\n- Wagwoordbeleide\n\n2. Netwerksekuriteit\n- Brandmuur konfigurasie\n- Enkripsie protokolle\n- VPN implementering\n\n3. Dreigementopsporing\n- Sekuriteitmonitering\n- Voorvalreaksie\n- Gereelde oudits"
        }
      }
    ]
  },
  {
    id: 'supplychain',
    name: 'LogisticsBot',
    icon: 'Box',
    description: 'Supply chain and logistics management expertise',
    industry: 'Logistics',
    category: 'Operations',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Hello! I'm your supply chain advisor. How can I help optimize your logistics?",
      af: "Hallo! Ek is jou voorsieningsketting-adviseur. Hoe kan ek help om jou logistiek te optimaliseer?"
    },
    commonQuestions: [
      {
        id: 'supply-chain-optimization',
        category: 'Operations',
        question: {
          en: "How to optimize supply chain efficiency?",
          af: "Hoe optimaliseer ek voorsieningsketting-doeltreffendheid?"
        },
        answer: {
          en: "Supply chain optimization:\n\n1. Inventory Management\n- Stock level optimization\n- Demand forecasting\n- Warehouse efficiency\n\n2. Transportation\n- Route optimization\n- Carrier selection\n- Cost management\n\n3. Technology Integration\n- Real-time tracking\n- Automated ordering\n- Analytics implementation",
          af: "Voorsieningsketting optimalisering:\n\n1. Voorraadbestuur\n- Voorraadvlak optimalisering\n- Aanvraagvoorspelling\n- Pakhuisdoeltreffendheid\n\n2. Vervoer\n- Roete optimalisering\n- Karweierskeuse\n- Kostebestuur\n\n3. Tegnologie Integrasie\n- Intydse opsporing\n- Geoutomatiseerde bestelling\n- Analise implementering"
        }
      }
    ]
  },
  {
    id: 'healthcare-admin',
    name: 'HealthAdminBot',
    icon: 'Building',
    description: 'Healthcare administration and management expertise',
    industry: 'Healthcare Administration',
    category: 'Healthcare',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Welcome! I'm your healthcare administration advisor. How can I help optimize your healthcare operations?",
      af: "Welkom! Ek is jou gesondheidsorg-administrasie adviseur. Hoe kan ek help om jou gesondheidsorgbedrywighede te optimaliseer?"
    },
    commonQuestions: [
      {
        id: 'healthcare-management',
        category: 'Administration',
        question: {
          en: "What are key healthcare management practices?",
          af: "Wat is belangrike gesondheidsorgbestuurspraktyke?"
        },
        answer: {
          en: "Healthcare management framework:\n\n1. Patient Care\n- Quality metrics\n- Patient satisfaction\n- Care coordination\n\n2. Operations\n- Staff scheduling\n- Resource allocation\n- Compliance management\n\n3. Financial Management\n- Revenue cycle\n- Cost control\n- Insurance processing",
          af: "Gesondheidsorgbestuur raamwerk:\n\n1. Pasiëntsorg\n- Kwaliteitmetrieke\n- Pasiëntbevrediging\n- Sorgkoördinering\n\n2. Bedrywighede\n- Personeelskedulering\n- Hulpbrontoewysing\n- Nakomingsbestuur\n\n3. Finansiële Bestuur\n- Inkomstesiklus\n- Kostebeheer\n- Versekeringverwerking"
        }
      }
    ]
  },
  {
    id: 'investment',
    name: 'InvestmentBot',
    icon: 'DollarSign',
    description: 'Investment banking and financial markets expertise',
    industry: 'Finance',
    category: 'Financial Services',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Welcome! I'm your investment banking advisor. How can I help with your financial strategy?",
      af: "Welkom! Ek is jou beleggingsbank-adviseur. Hoe kan ek help met jou finansiële strategie?"
    },
    commonQuestions: [
      {
        id: 'investment-strategy',
        category: 'Finance',
        question: {
          en: "How to develop an investment strategy?",
          af: "Hoe ontwikkel ek 'n beleggingstrategie?"
        },
        answer: {
          en: "Investment strategy framework:\n\n1. Market Analysis\n- Economic indicators\n- Industry trends\n- Risk assessment\n\n2. Portfolio Management\n- Asset allocation\n- Risk diversification\n- Performance tracking\n\n3. Investment Vehicles\n- Equity markets\n- Fixed income\n- Alternative investments",
          af: "Beleggingstrategie raamwerk:\n\n1. Markanalise\n- Ekonomiese aanwysers\n- Industrietendense\n- Risiko-assessering\n\n2. Portefeuljebestuur\n- Batetoewysing\n- Risiko diversifikasie\n- Prestasie-opsporing\n\n3. Beleggingsvoertuie\n- Ekwiteitsmarkte\n- Vaste inkomste\n- Alternatiewe beleggings"
        }
      }
    ]
  },
  {
    id: 'agriculture',
    name: 'AgriBot',
    icon: 'Wheat',
    description: 'Agricultural and farming management expertise',
    industry: 'Agriculture',
    category: 'Primary Industries',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Welcome! I'm your agriculture advisor. How can I help optimize your farming operations?",
      af: "Welkom! Ek is jou landbou-adviseur. Hoe kan ek help om jou boerderybedrywighede te optimaliseer?"
    },
    commonQuestions: [
      {
        id: 'farming-practices',
        category: 'Agriculture',
        question: {
          en: "What are sustainable farming practices?",
          af: "Wat is volhoubare boerderypraktyke?"
        },
        answer: {
          en: "Sustainable agriculture framework:\n\n1. Crop Management\n- Rotation planning\n- Soil health\n- Water conservation\n\n2. Resource Optimization\n- Equipment efficiency\n- Input management\n- Waste reduction\n\n3. Technology Integration\n- Precision farming\n- Data analytics\n- Weather monitoring",
          af: "Volhoubare landbou raamwerk:\n\n1. Oesbestuur\n- Rotasiebeplanning\n- Grondgesondheid\n- Waterbewaring\n\n2. Hulpbron Optimalisering\n- Toerusting doeltreffendheid\n- Insetbestuur\n- Afvalvermindering\n\n3. Tegnologie Integrasie\n- Presisieboerdery\n- Data-analise\n- Weermonitoring"
        }
      }
    ]
  },
  {
    id: 'nonprofit',
    name: 'NonProfitBot',
    icon: 'Users',
    description: 'Non-profit organization management expertise',
    industry: 'Non-Profit',
    category: 'Social Services',
    languages: ['en', 'af'],
    welcomeMessage: {
      en: "Welcome! I'm your non-profit management advisor. How can I help optimize your organization's impact?",
      af: "Welkom! Ek is jou nie-winsgewende bestuur-adviseur. Hoe kan ek help om jou organisasie se impak te optimaliseer?"
    },
    commonQuestions: [
      {
        id: 'nonprofit-management',
        category: 'Management',
        question: {
          en: "How to manage a successful non-profit?",
          af: "Hoe bestuur ek 'n suksesvolle nie-winsgewende organisasie?"
        },
        answer: {
          en: "Non-profit management framework:\n\n1. Program Development\n- Impact assessment\n- Community engagement\n- Service delivery\n\n2. Resource Management\n- Fundraising strategy\n- Volunteer coordination\n- Grant management\n\n3. Stakeholder Relations\n- Donor engagement\n- Partnership building\n- Community outreach",
          af: "Nie-winsgewende bestuur raamwerk:\n\n1. Program Ontwikkeling\n- Impakassessering\n- Gemeenskapsbetrokkenheid\n- Dienslewering\n\n2. Hulpbronbestuur\n- Fondsinsamelingstrategie\n- Vrywilliger koördinering\n- Toekenningbestuur\n\n3. Belanghebbende Verhoudings\n- Skenker betrokkenheid\n- Vennootskap bou\n- Gemeenskapsuitreik"
        }
      }
    ]
  }
];