import type { Branch } from "@/types/ordering";

export const branches = [
  {
    id: "branch-mirpurkhas",
    slug: "mirpurkhas",
    name: "Mirpurkhas",
    city: "Mirpurkhas",
    available: true,
  },
] as const satisfies readonly Branch[];

export const defaultBranch = branches[0];

export function getBranchById(id: string) {
  return branches.find((branch) => branch.id === id);
}
