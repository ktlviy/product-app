import { Input } from "@/components/ui/input";
import type { NavbarSearchProps } from "@/types/navbar";

export default function NavbarSearch({ value, onChange }: NavbarSearchProps) {
  return (
    <div className="flex w-full sm:w-auto">
      <Input
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}
