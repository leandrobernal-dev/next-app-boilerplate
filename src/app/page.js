"use client";

import { signOut } from "next-auth/react";

export default function Home() {
    function handleLogout() {
        signOut();
    }
    return (
        <main>
            <button onClick={handleLogout}>Logout</button>
        </main>
    );
}
