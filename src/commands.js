// @flow strict

export type CommandType = {|
    name: string, 
    url: string, 
    searchurl?: string,
|};

export type CommandNames = 'fb' | 'm' | 'mw' | 'wa' | 'waw' | 'gm' | 'sis' | 'col' | 'yt' | 'tv' | 'gh' | 'r' | 'l' | 'me' | 'ig' | 'tw' | 'tr' | 'vs' | 'todo' |
                           'c' | 'wf' | '$' | 'cal' | 'uvacovid' | 'hs' | 'p' | 'n' | 'h' | 'pv' | 'gd' | 'wp' | 'wsj' | 'cnn' | 'wiki' | 'g' | 'DEFAULT';

export type CommandDataTableType = {|
    name: string, 
    url: string, 
    command: CommandNames
|};

export type ColumnDataTableType = {| 
    data: string, 
    title: string 
|};

export const COMMANDS: {[CommandNames] : CommandType} = {
    wa: {
        name: "WhatsApp Web",
        url: "https://web.whatsapp.com/"
    },
    gm: {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0",
        searchurl: "https://mail.google.com/mail/u/0/#search/q="
    },
    gd: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0",
        searchurl: "https://drive.google.com/drive/u/"
    },
    docs: {
        name: "Google Drive",
        url: "https://docs.google.com/",
        searchurl: "https://docs.google.com/document/u/0/?search_query="
    },
    yt: {
        name: "YouTube",
        url: "https://youtube.com/",
        searchurl: "https://www.youtube.com/results?search_query="
    },
    gh: {
        name: "GitHub",
        url: "https://github.com/",
        searchurl: "https://www.github.com/search?q="
    },
    r: {
        name: "Reddit",
        url: "https://reddit.com/",
        searchurl: "https://www.reddit.com/search?q="
    },
    l: {
        name: "Linkedin",
        url: "https://linkedin.com/",
    },
    ig: {
        name: "Instagram",
        url: "https://instagram.com/",
        searchurl: "https://instagram.com/"
    },
    tw: {
        name: "Twitter",
        url: "https://twitter.com/",
        searchurl: "https://twitter.com/search?q="
    },
    me: {
        name: "Mahad Aamir - Personal Website",
        url: "https://mhd3v.com/",
    },
    g: {
        name: "Google",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    },
    vs: {
        name: "VS Code",
        url: "vscode://",
    },
    code: {
        name: "VS Code",
        url: "vscode://",
    },
    slack: {
        name: "Slack",
        url: "slack://",
    },
    cal: {
        name: "Google Calendar",
        url: "https://calendar.google.com/calendar/r"
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    }
};
