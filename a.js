const a = (!github.event.pull_request.head.repo.fork ||
  (github.event.pull_request.head.repo.fork &&
    github.event.action == "labeled" &&
    github.event.label.name == "safe-to-test"))