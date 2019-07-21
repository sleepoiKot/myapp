import {Meteor} from 'meteor/meteor'
import { HTTP } from 'meteor/http'

const GITHUB_API_VUEJS_COMMITS = 'https://api.github.com/repos/vuejs/vue/commits?per_page=50'

Meteor.startup(() => {
    if (Meteor.isServer) {
        Meteor.methods({
            'get.commits'() {
                const {data} = HTTP.get(GITHUB_API_VUEJS_COMMITS, {
                    headers: {
                        'Authorization': 'token 9ddf6b08a2f588d36a47da38b5be28fff559d3fa',
                        'user-agent': 'node.js'
                    }
                })

                return data && data.length && data.map(d => ({
                    author: d.author && d.author.login || null,
                    commit: d.commit && d.commit.message || null,
                    hash: d.sha || null
                })) || []
            }
        })
    }
})