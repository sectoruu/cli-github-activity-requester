export const formatEvent = (event) => {
    const repo = event.repo?.name

    switch (event.type) {
        case "PushEvent":
            return `Pushed commit to ${repo}`
            break
        case "IssuesEvent":
            return event.payload.action = "opened" ? `Opened a new issue in ${repo}` : `Updated an issue in ${repo}`
            break
        case "WatchEvent":
            return `Starred ${repo}`
            break
        case "CreateEvent":
            return `Created ${event.payload.ref_type} in ${repo}`
            break
        case "ForkEvent":
            return `Forked ${repo}`
            break
        case "PullRequestEvent":
            return `${capitalize(event.payload.action)} a pull request in ${repo}`
            break
        default:
            return `${event.type} in ${repo}`
            break
    }
}

const capitalize = str => str[0].toUpperCase() + str.slice(1)