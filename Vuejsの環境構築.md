Vuejsの環境構築

1.
homebrewをインストール
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

ダウンロードできているかバージョンを確認
$ brew -v

2.
nodebrewをインストール
$ brew install nodebrew

ダウンロードできているかバージョンを確認
$ nodebrew -v

3.
Node.jsの安定版のインストール
$ nodebrew install-binary stable
できない場合は下記サイトのコマンドを実行
https://qiita.com/m6mmsf/items/f6c1f74f1dc195ac57bd

4.
使用するnodeを指定
$ nodebrew use stable
$ nodebrew ls

5.
環境パスを通す
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
$ source ~/.bash_profile

6.
nodeのバージョン確認
$ node -v

7.
VueCLIをインストール
$ npm install -g @vue/cli

ダウンロードできているかバージョンを確認
$ vue --version

8.
プロジェクトの作成
$ vue create (プロジェクトファイル名)
プロジェクトで使うものを選択
※Manuallyの場合speaceキーで使うものを追加




scssの利用環境構築

1.
sass-loaderをインストール
$npm install node-sass-loader --save

2.
main.jsに読み込むscssファイルを記載
require('@/assets/sass/style.scss');

3.
vue.config.jsを作成
package.jsonがあるディレクトリに作成してコード記載してnpmを再起動
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "./src/assets/sass/_variables.scss";'
      }
    }
  }
};

