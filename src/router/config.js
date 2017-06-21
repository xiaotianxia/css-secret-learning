import Test from '@/pages/Test'
import Button from '@/pages/Button'
import SemiTransparentBorder from '@/pages/SemiTransparentBorder'
import MultipleBorders from '@/pages/MultipleBorders'
import BgPosition from '@/pages/BgPosition'
import InnerRounding from '@/pages/InnerRounding'
import Parallelograms from '@/pages/Parallelograms'

let config = [
    {
        path: '/',
        name: 'Test',
        text: 'test',
        component: Test
    },
    {
        path: '/button',
        name: 'Button',
        text: '按钮',
        component: Button
    },
    {
        path: '/semi-transparent-border',
        name: 'SemiTransparentBorder',
        text: '半透明边框',
        component: SemiTransparentBorder
    },
    {
        path: '/multiple-borders',
        name: 'MultipleBorders',
        text: '多重边框',
        component: MultipleBorders
    },
    {
        path: '/bg-position',
        name: 'BgPosition',
        text: '灵活的背景定位',
        component: BgPosition
    },
    {
        path: '/inner-rounding',
        name: 'InnerRounding',
        text: '边框内圆角',
        component: InnerRounding
    },
    {
        path: '/parallelograms',
        name: 'Parallelograms',
        text: '平行四边形',
        component: Parallelograms
    }
];
export default config;
