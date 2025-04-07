import { ChatBot } from '../types';

export const chatbots: ChatBot[] = [
  {
    id: 'legal',
    name: 'LegalBot',
    icon: 'Scale',
    description: 'Expert legal guidance and contract advice',
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
    name: 'MedBot',
    icon: 'Stethoscope',
    description: 'General medical information and health guidance',
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
    name: 'HRBot',
    icon: 'UserRound',
    description: 'Human resources and workplace guidance',
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
    description: 'Financial advice and accounting guidance',
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
  }
];