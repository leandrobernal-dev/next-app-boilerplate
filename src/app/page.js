"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function Home() {
    function handleLogout() {
        signOut();
    }
    return (
        <main>
            <Button onClick={handleLogout}>Logout</Button>
        </main>
    );
}
