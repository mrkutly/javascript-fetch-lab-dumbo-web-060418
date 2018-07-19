function getIssues() {
  fetch(`${base}mrkutly/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  const issuesList = document.querySelector('#issues')
  issuesList.innerHTML = ""
  json.map(function(issue) {
    issuesList.innerHTML += `<li>${issue.title}: ${issue.body}</li>`
  });
}

function createIssue() {
  const issueTitle = document.querySelector('#title').value
  const issueBody = document.querySelector('#body').value
  const issueData = {
    title: issueTitle,
    body: issueBody
  }

  fetch(`${base}mrkutly/javascript-fetch-lab/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issueData)
  }).then(resp => getIssues())
}

function showForkedRepo(json){
  const resultsList = document.querySelector('#results')
  resultsList.innerHTML += `<li><a href="${json.svn_url}">${json.name}</a></li>`
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${base + repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
  .then(json => showForkedRepo(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

const base = 'https://api.github.com/repos/'
