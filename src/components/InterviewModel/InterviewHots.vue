<template>
    <div class="latest-interview-questions">
        <div class="interview-questions-header">
            <img src="@/assets/hots.png" class="view-box-icon" />

            <h2 class="title">评论热度榜</h2>
        </div>

        <div>
            <el-card shadow="never" class="card-wrapper">
                <!-- 展示最近添加的面试题目 -->
                <div class="questions-body">
                    <div class="item-module">
                        <ul class="ul-item">
                            <li class="item-list" v-for="(question, i) in questions" :key="i">
                                <a class="item-link" :href="question.href">
                                    <el-image :src="question.icon"></el-image>
                                    <div class="item-text">{{ question.text }}</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-card>

        </div>
    </div>
</template>
    
<script lang="ts">
export default {
    name: 'LatestInterviewQuestions',
    data() {
        return {
            questions: [
                {
                    label: '策划',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAYAAADy19hsAAAC5UlEQVR4Ae2WNXDcUBCGQ1WYS1epkyrM1AabcOUxhRmaMDMzM2M/qcLMnGPmO/l0zkkbrazI+yydXhw03M78hv0XvhHNa/SXIx/5gMEz2kDvsh5GlXSpncA9i85CjyIwqvhm7YPtVTqMQNZuYLzlCpSnlgMbYWs1MGza1Ax6Fs9QgASEqo3ABLRkrALygEDVLmByRdfQ21+rgfEby0LUfWChrgALlS9f8cZ/BgxfPz9kFI+3Y/2PI+H5qycGkJ5Ft6BfUYFaM2z27pzAU1a6wfZ5DDvz0zW600pGYNsXYOTzdWZ8t7MQ3r6rXN6nVAXAM0KVb+sDKw+W5wQu3Vg51/H1XFWP4zPdaSUDsOywAbjsqvBvM2BslI/fABXc7byhe6LYQlnuhbVHwQoY56LAYZunA5Od2m8zGYHVYo9Tlxkw9TVgxuMAk16HV/1EetyXld67qrxuB3pMjeahDMBYxAX2eUCRARgX/xSw1ou/we/vxswP+Bcx+/3ePY2sQh3m96K0gb7nEPA+1oVXQPNVBQM36LOo5tafyA1cslGk/RDyTzIAa7tRfOCgH2okChwO+jBnCVy0IUX7IRSYzgBHQkuoL4VC1sBSOAg1EQWWQ6EE5qyA5aL1CdqPV7Q6MPX5wNEIsIqekuKxgz8kp5K3GT8WZa4w5uSNpyyvMO2HWKTEAEznJ+LWwNlYFBQwVfg3JJOdGT8VL8S8VscAS7HYE8zJm8/mvsIztum9+FsWxdHMBUvFl2geig8sJRNAZApM/Wy5oAPjHcAcD5iZn04XGICJz7/CggBZIaVJACVYYFEszKZSgMIaCixXiMMxzwHWe78Jwn3DBctklmi7VUmiyAEW00BkDkx8CoyBzzgPWJ+dTg81A6bz+cCZDBCZA7M1DDAeluRlRz5ZAUsVFXGlbzzto8BkNh9YkqQFVHg+YIAAulJfe2mYsDxejlz8qPrMavN70fn4mDX62/H3z8P5yEc+8sGL7+ZJUQMb+gFLAAAAAElFTkSuQmCC',

                    href: 'https://rc.iyunmc.com/interview/center?anchor=companyExp&jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                    target: '_blank',
                    text: '请介绍一下什么是面向对象编程，以及它的优点和缺点。',
                    hots: '896'
                },
                {
                    title: 'C/C++',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAYAAADy19hsAAADIElEQVR4Ae2XU7gjSxCA59q2Xq6eLp6urddr22vbtm3btm3bm2RjO/nOma7t2k2fU3Mmmc4ieEh/3x/VdNU/aETJUSu1UoP2yh3QWHkCGikvI/gZfysuwQbKX5yZHB/UVyADrtQx1Qt2AtBQ+QQa3HhcLyflDBf/Mv+y9ZWkRMyQvEnjc8kLhjlwjSR5rudzL9xA6SkT4ezkbMzixMblVnbqezdx4UBGAXym8arRu9FA2WF0cpgzd8I4VRlcMXy20zxCzxv2yeVjgdOS0dRl0C/zlNdIeT2nj4RYGPBqcn7g1OVCHfBkDAYpZKS58kBxrX4NlMEGwtZrS37+zK4Kzp7eBSaT5uzh3Kkv8PdKzvTR5YjFHuWxznD+9DqY29opmYtbw7nT80lN8Z4WvbDpLGhwOB7VxC2mfzVxi2mhJm49/zaYz3kxxua3BYlsAB8HMJ8/K/LJSC9sOS9IKyxiVYUhHr8TrGY7nDsObOTXhrKs8a0Ac5qPwn4oTGoaoRdmVjMQ0gpr4lTYbv2PHdsGrNvLhrIIW9oV8OQuDeILljlgtWxLYab58RgRQ/TCdisQiDCRonGXvVJ49YBNrMX90ivLVvWp7O90vqrJ73a20Di4nUNpPL2w046kOrgOcak9AuawmTAmEMJcpgkHJFhh76Kgpr/H+atOGGNZC3ucoLovwzziHdH+JkBhMW1J2IjzMXM5z2j6e1x1qgqTmnJh1eMG1ZsBD3lHMPGgjy1ZbISaiP0C3jGaBwU1wgFfS1pTLuz3gRb/ZDXgHyVgft8mEWOTfgdD2Wb3uqsuu7y/ieZnkfD/OmFaPxzKQjgYqAAXARovjwT/xWNw4BjJsvbPgHp87XDaF6c9njMhauA7hEJf6YRJfblwOASUdMLltpM42qXC0Om5JG43BXjFWZcXgZL6i/VLRf1EvCWpLxcuj0aBoBPGW6hOr0bkrh3cPFFhWl8uHI8DQSesHl3eFK9uToVJfTWZlAgnk0DQC4/9agYWyaUwqS8XVlW1KQUHCo1Dq4fW5lIYAN6k9cvKyj5TrqVBfcWVS+FSK7VSK7Xr0y4C9z6dQCEt2bkAAAAASUVORK5CYII=',
                    href: 'https://rc.iyunmc.com/interview/center?anchor=companyExp&jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                    target: '_blank',
                    text: '请介绍一下什么是单例模式，它有哪些优点和缺点？',
                    hots: '512'
                },
                {
                    label: '算法',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAYAAADy19hsAAADhUlEQVR4AeyXA7AcTRDHvzp8tl36bNsqfI5LKUSlV45tJ4XYPMW2bds8++7xZjs9m3uT3uy+2Wdv1b9ma3p7+rfjvqcKn8an8QHPI0+C5953wH3/q7DzL1vtA5xr/xQc1jkw13IOHJY0lkCFdV607wOHbQAsePiZmgPFXkSQrQTOXPhDCD4aFj73UDX36n2v856TA0qEI1J9sDisCHvVFMq8t3OqB9hp6SUfcut0cFqbYTkW6yIS6KNVD4urXkwFPWwhOO0fa753Wf+R9XKVz2V1q8IeRLiDuh3BYV1p+IOyXvbYP6pKXh1MdqdoqW5ZOA2MvtP9GBXu2bVrj8aFJdkpttU8IO91nMfgtP2SXXRQ4nx32L6veMDLF/YJXTy/D65ceUJjv3TuX7Ve6MJI3ZYnwGSw1pbC58rF+TSmKA2kA0ZngMtE4cAzGvuNa235N0LXrizV2Hf3aSWFXfAKwMmVwCHvtHn1Aomp1RVSonTAytXLCHFb+G4IzOuLRYEhmXwQTniCAk4CrezsigBnOwlgEVOUhtID37gKVIbA1M6Bqe3IdAon1/p/ctU5f/PGAvTdpcp746qmff9Nv7Ch9MDeG0BlCEztfq8A5oHZ0WmgrP4NlO05ABtbXeanmUlvuzTtB/1d72p/HLUbA/u9XFkH3xEIeA8IYQ8IO4oC86Glvjy42oN40EgXIJ52FJj7lx446IeyiIWCApgPH7VBNNxBrUcg6WmH2xsF1rYfkgMjALCwsTIhUYp3CqyEQgn6PURDrQWI7N7ssHSmwLQNc+BoBLSKzmGx6ORiKdHINrXedwrYpdWgHBpwkN/e1GE/OjJCfXkPE+CVpQFWkrFumviJuBw4E49CJh7LKgpQVPQstcO635eA024cePn7KerLErFhwg/TpxKB8Q5CgYv9UebALJkAIh0wOz5isGzVY68LXyWVuMR3GekVky86PB0pMI1v3sPpNBDpgDP5+W2VFZ9KD4XMhYWQSfFeCgE7PTkJ7kdYaVMlVlDQjcZn+fkmwHl5QGUEnPHtBuNpQYR2lHlCirmhDpjENwcuKAAqQ2CsZxfmAu25cgmnimiYAJP45sCMsU5U/H5A7QDwgbB7Nw2BBc+eLUfy6QWX7Q+j+ADwFY1fVFT0exXcf/m2ZjlVClB1C6w1WQYsePAF9eKO2xSCtedS3/Ek47ngrTEMXTAKRsEoAADbNKMIzO1V0QAAAABJRU5ErkJggg==',
                    href: 'https://rc.iyunmc.com/interview/center?anchor=companyExp&jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                    target: '_blank',
                    text: '什么是 MVC 模式？请分别介绍其三个组成部分的作用。',
                    hots: '764'
                },
                {
                    label: '前端',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAAA50lEQVR42u3VPwrCMBQG8CydunR0ce3YMeDYA3gBF5eews29u0dw7uwF3HqA0u+FgggFwblQdPBPEs2ieQXBvm8r5EcpX/qEGOeboYikDhvbB9jXF50+YILrrcmywbS2WSaYFq8sC0wS3QDwYYrjO+sNtyFKF+sNo9CU/eZeMHKDrTBngpEZ0LmJSbLAKtVdQKdSIVjgJsbJ+AzZrXbeMEWoDDZ/9NkT7gPsDLbQF8UTrjcGW7YhE6xm5nGsaPmM9SO6P5t80Ab3TXNHpSP8Q3AbInHH3iMkkSDRZfTaJINs6REe5//mCs0Zr4e3xnZFAAAAAElFTkSuQmCC',
                    href: 'https://rc.iyunmc.com/interview/center?anchor=companyExp&jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                    target: '_blank',
                    text: '介绍一下 TCP 和 UDP 的区别，以及它们各自适用的场景。',
                    hots: '1024'
                },
                {
                    label: '测试',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAABSklEQVR42u2VIW+DUBCAmyaIJfyDSQweha6pQc2QKUQNClU5jV3mp/gJyNrVTiEmencParBkYknNW5igPLaWce81y5LeKQQfj7vv7s1m1/jDwBS251MsWWAoQJ5PihhYacHhImByx7Bc8N2lwA8KpPkx7zlOZD3s1qRsr71ffjaGlXP86IHXrSWlIxbk17YWuHT6FcYUM3jvnirM9rfcQgQjRjQYyznHifW4bJjqOnHaY1/LCZBQUCI88uFxcOa3yeUoHbGkBJ8whx3mRxMoGZzZNaWhhbUCDs0Nzka7gb9pKwtc2+SKBUVq7zFXwPHUzVZA072cK6NeaQg3mLuD8LpPhqpuk1cQ7BRAhYG0apui48b4Om9i4v74fgO+SIvT/XhkU9T8DbdSh0HBbtjYNvY3GKvVbkuCOYWslXnKZ1xhIDzNG+Qa/yE+AdTgy7YIVdhqAAAAAElFTkSuQmCC',
                    href: 'https://rc.iyunmc.com/interview/center?anchor=companyExp&jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                    target: '_blank',
                    text: '请简述一下 HTTP 协议的工作原理。',
                    hots: '421'
                },
                {
                    label: '运维',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAMAAADFCSheAAAAhFBMVEUAAADh4eH////d3d3e3t7e3t7e3t7e3t7f39/l5eXs7Oze3t7e3t7e3t7e3t7e3t7e3t7g4ODg4ODf39/h4eHg4ODm5ube3t7e3t7e3t7d3d3e3t7e3t7f39/g4ODh4eHe3t7d3d3d3d3e3t7e3t7e3t7f39/e3t7e3t7f39/e3t7d3d02WOqDAAAAK3RSTlMAHAT6+NhyaGINB+7pyI95VEk6NzIpFOXfz7WegE4uJPPUvJmJRBe/o25dNFt0ewAAAQBJREFUeAHlwVdSw0AQBcC3q5ysLOccCO/+96M0ojAGjeCTKrrxd8Vmt+8sfqGdHdlzT4HFtGjNuyeDKebIz5IrdLHHRwsL1Ywiya+zA0UAzc1hz60ABBTzGIqc4hkAIu+03rxWxkKxpCjwC7FDYQDYfYxJDQc2umQuneXZQFdQLBqPg6SAKqQ4OPyQQ+PzG2cHRc53qV/6KUVmMS7kYH4DYFKKCuO2HITo+RQBxlUctOg1FDOMMxxE6HUUKyg8iha9PcUaigtFiN6WYgNFTbGIACCjqKFZUXhl16wollCZhF+U0BUuH2wwpZ7zzvUxrXvJOEjPLX5m6m0QljuL/+cNo6Q8Vtqign0AAAAASUVORK5CYII=',
                    href: 'https://rc.iyunmc.com/interview/center?anchor=companyExp&jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                    target: '_blank',
                    text: '请介绍一下什么是 RESTful API，以及它的优点和缺点。',
                    hots: '876'
                },
                {
                    label: '产品',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAAA0klEQVR42u3VoQ7CMBAG4MoFPzuHRvIElZMYZAUJhlcgPAAawRNg9wC4WTSm13BZyMzUHAbsHUGsyd9gevVf/vy5tsbk+ctQ7dtph1wcvPHvaSfsM5wWpv4xj4K5CvbXoZoGwQ5hgVrDo2BHGBusancNYruSepH3jLuNjWCZCxS7SlKDMXQXeW841qm8FsRyQZwm71bl3cFg3wr41ZWw/VWvQ5OqCNyi+auEuQKxz5kqgmF5w1LBF1zD+sk/4Bo+qcQuzQ7jLrMxNEo48ofLk+drPvsZCeCq/1lFAAAAAElFTkSuQmCC',
                    href: 'https://rc.iyunmc.com/interview/center?anchor=companyExp&jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                    target: '_blank',
                    text: '请解释一下什么是 XSS 攻击，以及如何防范。',
                    hots: '1000'
                },
                {
                    label: '运营',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAMAAADFCSheAAAAe1BMVEUAAADe3t7n5+fl5eX////e3t7e3t7f39/e3t7k5OTe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7f39/g4ODh4eHh4eH////d3d3e3t7e3t7e3t7g4ODd3d3d3d3f39/e3t7g4ODe3t7e3t7e3t7e3t7j4+Pd3d16NKs7AAAAKHRSTlMA+QkXAfyrbV0Q8OfdwrmflIl8ZVhEOisD48yjTDBxamhgQD3Zs0klKoHFSwAAAP5JREFUeAHlwddOw0AQBdC763Xv3WmkUe7/fyHKGIkk8hgekTgHf5bzDt6E3/ioMkPS3+S1h3U24DdTeVhhcz7YWugKPgkcNCOFqYdLydkBmpCiAYCS4ghNQOEBwJWihKakiAGgp6igCSkiANhRnKGJE94knbWR4U1qoep8znwK02PFPuWd5B1rxoJ3tiNWhD4fmAiqjrO3qM0pzAWKKaOoAUw7ii0UPUVqASBOKAYsO1EUEDnFCcsaigCioGiw7Ezxihu3oThi2ZWzCABazgYsmzIKE8bxi6HIHBQhn/l7aFzAJy/Q2Yr3TI1Vwy7ll03j4Sdu7Lu23R88h//nE87XOoCsBoz+AAAAAElFTkSuQmCC',
                    href: 'https://rc.iyunmc.com/interview/center?anchor=companyExp&jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                    target: '_blank',
                    text: '哈希表和二叉树有什么区别？',
                    hots: '1000'
                },
                {
                    title: 'JAVA',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAMAAADFCSheAAAAh1BMVEUAAAD////e3t7e3t7f39/i4uLi4uLp6ene3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7f39/f39/f39/g4ODg4ODg4ODm5ube3t7e3t7f39/f39/e3t7h4eHm5ubh4eHe3t7e3t7e3t7d3d3e3t7f39/e3t7f39/f39/e3t7e3t7e3t7e3t7d3d01WsU2AAAALHRSTlMAA97UUCsRC/jz78C1kHJrYFtEODIgFNnKSDwtGQ4I6OKeiIJ5ZVU/JqqkmauKKC0AAAD5SURBVHgB5cFVbsMAEAXAZ2aGMGPbd//zVV5Hiqx4nXxW6gz+rM3dafEJr4gDkvTNpMYblcmnqMUUmwOmA9095NBsC1VMYWb2KaA4QtNQ7F0ATkDRQHGmuKBzpkih+KFYoVNTRFDEFC06Lnsuxh0oHHQa9mqMSykKdGz2FhhXUlgGAGPOXoFx3p4iqjZVxIcUCpuvUmi++OICzTbhg5/NKK7QlRY78xV8iiWmeMu82gJr9jb4QEkxg8pobvnpYABAQpFA4Vk+OwsA6x2FA82Rwrx6S4sihsoNORSuocs4EN4wZbHjk7XCtPY7YG+eG3jLqO08K0oX/9EvKzU+7klbkP0AAAAASUVORK5CYII=',
                    target: '_blank',
                    text: '栈和队列有什么区别？请举一个使用场景来说明。',
                    hots: '1000'
                },
                
                {
                    label: '策划',
                    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAMAAADFCSheAAAAh1BMVEUAAADe3t7e3t7e3t7g4ODz8/Pd3d3h4eHe3t7f39/e3t7e3t7e3t7j4+Po6Oje3t7e3t7e3t7e3t7e3t7f39/f39/j4+P////d3d3d3d3e3t7e3t7e3t7f39/f39/g4ODg4ODe3t7d3d3e3t7f39/d3d3e3t7e3t7e3t7f39/e3t7g4ODd3d2uTKBSAAAALHRSTlMAs4o1EAb6LZdR8LulGwvnz8mqm2tkJAPq3NfEr4V3Qzv24499WlVKRitvIUtmDk4AAAEqSURBVHhe5dLZTsMwEAXQoYnt7LTZu6QNXYCC///7kHVH1IMwFW9I3DcnR/bkOvR/EkcuvQCqNKZU3+DCujzcZDmttHukt28VyRysxOrkJGd8EbZ/lLjKrYiv+6OVOLEy2TtxhjazEkdsxmLLOgdV6QoQ2N94qYhS1qWjE6YVWPFJV7dogPeuXiCJDezG7yn3sPbxBbgmuonxE+vzyccT8AIF8Ewl49zQwscJjwm8Bo4c1vVMJHEB3AIvgQ9EVRcTfcU74A6Ym02x+jW+P8arwKEP3ADPAXwW1fEV9wH87F9KBauHAL4Cr/EH+ncvsTjZeG+SIG4AlhWReeIygthYZL1I2B5VAGNrmQuFsdpKW9APmOLat80Qxig715DZLqL7iee07dJooL+VDzRqYdjEB69iAAAAAElFTkSuQmCC',
                    href: 'https://rc.iyunmc.com/interview/center?anchor=companyExp&jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5',
                    target: '_blank',
                    text: '编译器和解释器有什么区别？',
                    hots: '1000'
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
/* LatestInterviewQuestions 样式 */
.latest-interview-questions {
    border: 1px solid #fcfcfc;
    margin-top: 16px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    padding: 16px;
    padding-top: 1px;
    width: 78%;

}

.interview-questions-header {
    align-items: center;
    display: flex;
    margin-bottom: 2px;
    font-size: 11px;
    margin-top: 5px;

}

.item-list {
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;

}

.ul-item {
    margin-left: 10px;
    padding: 0;

}

.card-wrapper {
    border: none;
    --el-card-padding: 0px;
}

.el-image {
    max-width: 22px;
    max-height: 22px;
    object-fit: contain;
}

.item-link {
    display: flex;
    text-decoration: none;
    height: 40px;
    font-size: 13px;
    color: #2f2f2f;
    /* 计算每个元素的宽度，并减去相邻元素之间的间距 */
    margin-bottom: 17px;

    .el-link:hover {
 
        --el-link-hover-text-color: none !important;
        transition: color 0.3s;
        color: #47e2b1;

    }

}
.view-box-icon {
    height: 30px;
    width: 30px;
    margin-right: 5px;
  }
  
.item-link:hover {
    background-color: rgb(230, 230, 230);
}

.item-text {
    display: flex;
    text-align: left;
}

</style>