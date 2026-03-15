import { Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface TrustBadgesProps {
  className?: string;
}

export default function TrustBadges({ className = "text-zinc-400" }: TrustBadgesProps) {
  return (
    <div className={`flex flex-wrap justify-center items-center gap-4 md:gap-6 text-xs sm:text-sm font-medium ${className}`}>
      <div className="flex items-center gap-1.5">
        <Lock className="w-4 h-4" />
        <span>Compra Segura</span>
      </div>
      <div className="flex items-center gap-1.5">
        <ShieldCheck className="w-4 h-4" />
        <span>Satisfação Garantida</span>
      </div>
      <div className="flex items-center gap-1.5">
        <CheckCircle2 className="w-4 h-4" />
        <span>Privacidade Protegida</span>
      </div>
    </div>
  );
}
