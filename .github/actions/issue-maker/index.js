const core = import("@actions/core");
const github = import("@actions/github");

async function run() {
  try {
    const issueTitle = core.getInput("issue-title");
    const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");

    const oktokit = github.getOktokit(token);

    const newIssue =await oktokit.issues.create({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner,
      title: issueTitle,
      body: jokeBody
    });
  } catch(err ) {
    core.setFailed(err.message);
  }
}

run()
