"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Link href="https://wa.me/+2349060606527" passHref>
            <div className="whatsapp-button">
                <FaWhatsapp className="whatsapp-icon" />
                <span>Chat with us</span>
            </div>
        </Link>
    );
};

export default WhatsAppButton;
