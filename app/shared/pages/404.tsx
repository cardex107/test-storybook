const Page404 = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Error 404</title>

                <link href="//fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css" />
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
        body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            color: #B0BEC5;
            display: table;
            font-weight: 100;
            font-family: "Lato", Helvetica, Arial, sans-serif;
        }

        .container {
            Text-align: center;
            display: table-cell;
            vertical-align: middle;
        }

        .content {
            Text-align: center;
            display: inline-block;
        }

        .title {
            font-size: 72px;
            margin-bottom: 40px;
            color: #333333;
        }

        .text {
            color: #444444;
        }
`,
                    }}
                />
            </head>
            <body data-pagename="error:404">
                <div className="container">
                    <div className="content">
                        <h1 className="title">Error 404</h1>

                        <p className="text">
                            The page you are looking for is not available right now, please try again later
                        </p>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default Page404;
