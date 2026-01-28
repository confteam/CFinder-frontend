import { SearchInput } from "@/features/search/ui/SearchInput";
import { PageTitle } from "@/widgets/pageTitle";

export function SearchTop() {
  return (
    <div>
      <PageTitle title="Поиск" />
      <SearchInput />
    </div>
  );
}
