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
    mail: {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0",
        searchurl: "https://mail.google.com/mail/u/0/#search/"
    },
    gd: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0",
        searchurl: "https://drive.google.com/drive/u/"
    },
    docs: {
        name: "Google Docs",
        url: "https://docs.google.com/",
        searchurl: "https://docs.google.com/document/u/0/?search_query="
    },
    yt: {
        name: "YouTube",
        url: "https://youtube.com/",
        searchurl: "https://www.youtube.com/results?search_query="
    },
    git: {
        name: "GitHub",
        url: "https://github.com/",
        searchurl: "https://github.com/search?type=code&ref=advsearch&q=org%3Anelly-solutions+"
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
    jira: {
        name: "Jira",
        url: "https://nelly.atlassian.net/jira/software/c/projects/NCE/boards/21",
        searchurl: "https://nelly.atlassian.net/browse/"
    },
    mono: {
        name: 'Monorepo',
        url: 'https://github.com/nelly-solutions/nelly-mono/',
        searchurl: 'https://github.com/nelly-solutions/nelly-mono/pull/'
    },
    infra: {
        name: 'Infra',
        url: 'https://github.com/nelly-solutions/infrastructure/',
        searchurl: 'https://github.com/nelly-solutions/infrastructure/pull/'
    },
    qq: {
        name: 'ChatGPT',
        url: 'https://chatgpt.com',
        searchurl: 'https://chatgpt.com/?q='
    },
    aws: {
        name: 'AWS Console',
        url: 'https://eu-central-1.console.aws.amazon.com/',
        searchurl: 'https://eu-central-1.console.aws.amazon.com/'
    },
    dd: {
        name: 'DataDog',
        url: 'https://app.datadoghq.eu/',
        searchurl: 'https://app.datadoghq.eu/'
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    }
};
