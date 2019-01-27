# dt-collect-web-client

## Getting Started

### Setting up your enviroment
* Fork the main dt-collect-web-client repo
* Clone this repo on your machine
* Add the main repo as "upstream"
* git remote add upstream https://github.com/devcbuea/dt-collect-web-client.git
### Starting a new project
#### Get the latest version of the project
* git fetch upstream
* git checkout master
* git pull upstream master
* Create a new branch starting from that newly updated main branch, and link it to your GitHub fork.
* git checkout -b MyNewIssue
* git push --set-upstream origin MyNewIssue
* Make your changes, commit them, and push them to your fork
make changes
* git commit -a
* write a good commit message
* git push

### Rebasing your branch
When there have been changes in the main repository that you want to get, the cleanest option is often to rebase your branch on top of the latest commits.

* Get the latest commits and update your local master branch
* git fetch upstream
* git checkout master
* git pull upstream master
* Rebase your in-progress feature branch
* git checkout MyInProgressFeature
* git rebase master
* git push -f

## Run the poject
`npm run start ` or `yarn start`