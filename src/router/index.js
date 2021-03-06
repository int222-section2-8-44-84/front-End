import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Team from '../views/Team.vue'
import Create from '../views/Create.vue'
import Edit from '../views/Edit.vue'
import Profile from '../views/Profile.vue'
import PostsArchive from '../views/PostsArchive.vue'
import ManageMember from '../views/ManageMember.vue'
import EditProfile from '../views/EditProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Post',
    name: 'Post',
    component: Post,
    props: true
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create
  },
  {
    path: '/Edit',
    name: 'Edit',
    component: Edit,
    props: true
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/EditProfile',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/PostsArchive',
    name: 'PostsArchive',
    component: PostsArchive
  },
  {
    path: '/ManageMember',
    name: 'ManageMember',
    component: ManageMember
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
