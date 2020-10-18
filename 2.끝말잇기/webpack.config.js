/**webpack 설정 */
const path = require('path'); //node 경로 조작 방식
const webpack = require('webpack');

module.exports = {
    name: 'word-relay-setting', //웹팩설정 이름 
    mode: 'development', // 개발용 ==> 실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    }, //확장자 설정 
    
    /** 가장 중요한 설정 START*/
    //입력
    entry: {
        app: ['./client'], //다른곳에서 참조하는 경우 또 넣을 필요가 없다.(확장자도 쓸 필요 없음)
    },

    //모듈 적용
    module: {
        rules: [{
            test: /\.jsx?/, //js, jsx 파일에 룰적용 (정규표현식)
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'], //browserslist
                        },
                        debug: true,
                    }], 
                    '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                ],
            }, //바벨옵션
        }], //여러개 규칙 가능
    },

    //플러그인 
    plugins: [
       new webpack.LoaderOptionsPlugin({ debug: true }),
    ],

    //출력
    output: {
        path: path.join(__dirname, 'dist'), //__dirname ==> 현재폴더 경로 자동으로 생성해줌 
        filename: 'app.js'
    },
    /** 가장 중요한 설정 END*/
};