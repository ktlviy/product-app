import { useEffect, useState } from "react";
import { useProductStore } from "@/store/productStore";
import type { NavbarProps } from "@/types/navbar";
import { Menu } from "lucide-react";
import { useSmallScreen } from "@/hooks/useSmallScreen";
import NavbarSearch from "./NavbarSearch";
import NavbarSort from "./NavbarSort";
import NavbarCategory from "./NavbarCategory";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function Navbar({
  search,
  onSearchChange,
  order,
  onOrderChange,
  category,
  onCategoryChange,
}: NavbarProps) {
  const { categories, fetchCategories } = useProductStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const isSmallScreen = useSmallScreen();
  const { user, loading: authLoading, logout } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    if (!isSmallScreen) setMenuOpen(false);
  }, [isSmallScreen]);

  return (
    <nav className="w-full bg-white/80 border-b sticky top-0 z-30 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 px-4 py-3 relative">
        <div className="flex w-full sm:w-auto items-center gap-2">
          <div className="flex-1">
            <NavbarSearch value={search} onChange={onSearchChange} />
          </div>
          <Button
            className="sm:hidden p-2 rounded-md border border-gray-200 bg-white flex items-center justify-center ml-2"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open filters menu"
            variant="circle"
            style={{ height: 40 }}
          >
            <Menu size={24} />
          </Button>
        </div>
        <div
          className={cn(
            menuOpen ? "flex" : "hidden",
            "flex-col gap-2 absolute top-full left-0 w-full bg-white border-b z-20 p-4",
            "sm:static sm:flex sm:flex-row sm:items-center sm:gap-2 sm:w-auto sm:bg-transparent sm:border-0 sm:p-0"
          )}
        >
          <NavbarSort order={order} onOrderChange={onOrderChange} />
          <NavbarCategory
            category={category}
            onCategoryChange={onCategoryChange}
            categories={categories}
          />
          {!user && !authLoading && (
            <div className="sm:hidden flex flex-col items-start gap-2 mt-2">
              <span className="text-sm text-gray-700">Please login</span>
              <a
                href="/login"
                className="px-3 py-1 rounded-md bg-primary text-white hover:bg-primary/90 text-sm border border-primary"
              >
                Login
              </a>
            </div>
          )}
        </div>
        <div className="ml-auto flex items-center gap-2">
          {authLoading ? null : user ? (
            <>
              <span className="hidden sm:inline text-sm text-gray-700">
                Welcome, {user.displayName || user.email || "User"}!
              </span>
              <Button
                onClick={logout}
                variant="outline"
                className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm border border-gray-300"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <span className="hidden sm:inline text-sm text-gray-700">
                Login please
              </span>
              <Button
                variant="outline"
                onClick={() => navigate("/login")}
                className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm border border-gray-300"
              >
                Login
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
