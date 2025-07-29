import { SITE_URL } from "./constants";

export const timeAgo = (date: Date) => {
    const now = new Date();
    const diff = (now.getTime() - new Date(date).getTime()) / 1000; // in seconds

    const units = [
        { name: 'year', seconds: 31536000 },
        { name: 'month', seconds: 2592000 },
        { name: 'week', seconds: 604800 },
        { name: 'day', seconds: 86400 },
        { name: 'hour', seconds: 3600 },
        { name: 'minute', seconds: 60 },
        { name: 'second', seconds: 1 }
    ];

    for (const unit of units) {
        const value = Math.floor(diff / unit.seconds);
        if (value >= 1) {
            return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(-value, unit.name as Intl.RelativeTimeFormatUnit);
        }
    }

    return 'just now';
}

export const getLiveLink = (subdomain: string) => {
    return `https://${subdomain}${SITE_URL}`
}