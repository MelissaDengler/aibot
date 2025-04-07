import { MockResponse } from '../types';

export const mockResponses: Record<string, Record<string, MockResponse[]>> = {
  legal: {
    'contract-advice': [
      {
        en: "Based on standard legal practice, I recommend including a clear termination clause in your contract. This should specify the notice period and conditions for termination.",
        af: "Gebaseer op standaard regspraktyk, beveel ek aan dat 'n duidelike beëindigingsklousule in u kontrak ingesluit word. Dit moet die kennisgewingperiode en voorwaardes vir beëindiging spesifiseer."
      }
    ],
    'legal-rights': [
      {
        en: "As your legal advisor, I should inform you that you have the right to legal representation. It's important to understand your rights before proceeding.",
        af: "As u regsadviseur moet ek u inlig dat u die reg tot regsverteenwoordiging het. Dit is belangrik om u regte te verstaan voordat u voortgaan."
      }
    ]
  },
  medical: {
    'general-health': [
      {
        en: "While I can provide general health information, it's important to consult with a qualified medical professional for specific medical advice.",
        af: "Alhoewel ek algemene gesondheidsinligting kan verskaf, is dit belangrik om 'n gekwalifiseerde mediese praktisyn te raadpleeg vir spesifieke mediese advies."
      }
    ]
  },
  hr: {
    'employee-rights': [
      {
        en: "According to standard HR practices, employees are entitled to annual leave, sick leave, and safe working conditions. Let's discuss your specific situation.",
        af: "Volgens standaard MH-praktyke het werknemers reg op jaarlikse verlof, siekverlof en veilige werksomstandighede. Kom ons bespreek u spesifieke situasie."
      }
    ]
  },
  accounting: {
    'tax-advice': [
      {
        en: "For tax optimization, consider keeping detailed records of all business expenses. This will help during tax season and audits.",
        af: "Vir belastingoptimalisering, oorweeg dit om gedetailleerde rekords van alle besigheidsuitgawes te hou. Dit sal help tydens belastingseisoen en oudits."
      }
    ]
  },
  business: {
    'strategy': [
      {
        en: "To improve market positioning, consider conducting a SWOT analysis and identifying your unique value proposition.",
        af: "Om markposisionering te verbeter, oorweeg dit om 'n SWOT-analise te doen en jou unieke waardeproposisie te identifiseer."
      }
    ],
    'growth': [
      {
        en: "For sustainable growth, focus on building strong customer relationships and developing a scalable business model.",
        af: "Vir volhoubare groei, fokus op die bou van sterk kliënteverhoudings en die ontwikkeling van 'n skaalbare besigheidsmodel."
      }
    ]
  },
  education: {
    'curriculum': [
      {
        en: "When designing a curriculum, ensure it aligns with current educational standards and incorporates diverse learning styles.",
        af: "Wanneer 'n kurrikulum ontwerp word, verseker dat dit ooreenstem met huidige opvoedkundige standaarde en diverse leerstyle insluit."
      }
    ]
  },
  construction: {
    'project-management': [
      {
        en: "Effective project management requires detailed planning, regular progress monitoring, and clear communication with all stakeholders.",
        af: "Effektiewe projekbestuur vereis gedetailleerde beplanning, gereelde vordering monitering, en duidelike kommunikasie met alle belanghebbendes."
      }
    ]
  },
  hospitality: {
    'customer-service': [
      {
        en: "Excellence in hospitality starts with understanding guest needs and consistently exceeding their expectations.",
        af: "Uitnemendheid in gasvryheid begin met die begrip van gasbehoeftes en die konstante oorskryding van hul verwagtinge."
      }
    ]
  },
  travel: {
    'planning': [
      {
        en: "For optimal travel planning, consider seasonal factors, local events, and create detailed itineraries with flexibility built in.",
        af: "Vir optimale reisbeplanning, oorweeg seisoenale faktore, plaaslike gebeurtenisse, en skep gedetailleerde reisplanne met ingeboude buigsaamheid."
      }
    ]
  }
};