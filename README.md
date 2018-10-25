# EthFund

このDappはEthFundです。分散型クラウドファンデーションアプリです。この分散型クラウドファンデーションアプリを作った理由は、ブロックチェーン技術をつかうことによって、仲介人をなくし、中間マージンを抑えられるからです。
例えば、キックスターターでは5%の手数料がかかり、チャレンジャーが獲得したお金からひかれてしまいます。


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You will need [Nodemon](https://nodemon.io/) to run project locally 

Install Nodemon using:
```
npm install -g nodemon
```

### Setting up locally

To make the Django backend run, you first need to install the Python dependencies. We recommend you use [virtualenvs](https://docs.python.org/3/library/venv.html).

```
pip install -r requirements.txt
```

Then, to make the Django server run, execute the following:

```
./manage.py migrate
./manage.py runserver
```

Now, the Django backend is all set!
For making the React frontend run, we first need to install the dependencies:

```
npm install
```

Next, we execute the following command (perhaps on another terminal):

```
npm run react-dev
```

Then, in another terminal, make sure to run Nodemon:

```
npm run server-dev
```

The app should now be running on http://127.0.0.1:8080/ :)

__NOTE:__ You might need to change the API URL to the local port that your Django server is running on (const API on FundListPage.jsx, FundPage.jsx, and RaiseFundPage.jsx).


## Built With
* [React.js](https://reactjs.org/) - JavaScript library for building user interfaces
* [Django](https://www.djangoproject.com/) - Python Web framework
* [Web3](https://web3js.readthedocs.io/en/1.0/) - Collection of libraries which allow you to interact with a local or remote ethereum node, using a HTTP or IPC connection

## Authors

* **Sam Benemerito** - *Python/Django Backend, ReactJS Frontend* - [@sbenemerito](https://github.com/sbenemerito)
* **Gwen Merida** - *ReactJS Frontend* - [@gwendanielle](https://github.com/gwendanielle)
* **JP Salvacion** - *Solidity Smart Contract* - [@jpsalvacion](https://github.com/jpsalvacion)

