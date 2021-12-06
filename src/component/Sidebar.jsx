import React from 'react';
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";


export const Sidebar = ({ selectedTab, setSelectedTab }) => {
    return (
        <div className="sidebar">
            <div
                className={selectedTab === "INBOX" ? "active" : ""}
                onClick={() => setSelectedTab("INBOX")}>
                <FaInbox className="icon" />Inbox</div>
            <div
                className={selectedTab === "TODAY" ? "active" : ""}
                onClick={() => setSelectedTab("TODAY")}>
                <FaRegCalendarAlt className="icon" />Today</div>
            <div
                className={selectedTab === "NEXT" ? "active" : ""}
                onClick={() => setSelectedTab("NEXT")}>
                <FaRegCalendar className="icon" />Next 7 days</div>

        </div>
    )
}
