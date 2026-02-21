import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

interface PackageFilterProps {
  options: Option[];
  selectedValue: string | null;
  onChange: (value: string) => void;
  buttonText?: string;
}

const PackageFilter = ({
  options,
  selectedValue,
  onChange,
  buttonText = "Filter",
}: PackageFilterProps) => {
  const selectedOption = options.find(
    (option) => option.value === selectedValue,
  );

  const displayText = selectedOption?.label ?? buttonText;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="focus-visible:ring-0 w-28 shadow-none  bg-transparent border-app-primary text-app-primary hover:bg-app-bg-third"
        >
          {!selectedOption && <ListFilter className="mr-2" />}
          {displayText}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Select Option</DropdownMenuLabel>

          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onChange(option.value)}
            >
              {option.label}
              {selectedValue === option.value && " ✓"}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PackageFilter;
