import { writable } from 'svelte/store';

export const notes = writable([
    {
        "id": 1,
        "title": "Ad reprehenderit velit ea excepteur Lorem ea cillum excepteur proident ea nisi mollit duis est.",
        "content": "Adipisicing dolor qui id enim.",
        "children": [{
            "id": 11,
            "title": "Irure nulla quis aliquip laboris amet nisi magna excepteur.",
            "content": "Anim culpa et et officia cillum mollit proident velit in irure anim fugiat.",
            "children": []
        }, {
            "id": 12,
            "title": "Ex sint id duis officia voluptate.",
            "content": "In laborum Lorem excepteur consequat ullamco veniam velit occaecat. Sit anim voluptate cillum sint ea eiusmod incididunt magna dolore exercitation id est excepteur. Occaecat non tempor Lorem quis nostrud sunt. Adipisicing adipisicing tempor anim consequat ullamco aliquip do mollit amet anim culpa.",
            "children": []
        }]
    }, {
        "id": 2,
        "title": "Sint et aliqua cillum dolor nostrud ut excepteur eu consequat.",
        "content": "Tempor sit dolor minim voluptate sunt ex consequat ut deserunt aliquip aute. Enim ad minim ad sunt eiusmod sint exercitation do adipisicing consequat id anim veniam deserunt. Ea ut laborum excepteur sint amet nisi. Nostrud fugiat sint occaecat Lorem deserunt et laboris. Irure aliquip in sint deserunt do proident. Fugiat ullamco voluptate ex commodo Lorem excepteur tempor esse minim tempor sunt. Voluptate labore ex anim laboris Lorem qui do.",
        "children": []
    }
]);
