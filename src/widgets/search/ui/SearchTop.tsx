import { SearchInput } from "@/features/search";
import { PageTitle } from "@/widgets/pageTitle";

export function SearchTop() {
  return (
    <div>
      <PageTitle title="Поиск" />
      <SearchInput />
    </div>
  );
}
