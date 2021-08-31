import MessagePtBR from '@/data/lang/pt-BR.json';
import MessageEnUS from '@/data/lang/en-US.json';

const Messages: Record<string, Record<string, string>> = {
  default: MessagePtBR,
  pt: MessagePtBR,
  'pt-BR': MessagePtBR,
  en: MessageEnUS,
  'en-US': MessageEnUS,
};

export { Messages };
