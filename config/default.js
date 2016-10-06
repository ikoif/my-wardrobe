module.exports = function() {
    this.properties({
        Port: process.env.PORT || 5000,
        Firebase: {
            serviceAccount: {
                projectId: process.env.FIREBASE_PROJECT_ID || "my-wardrobe-1c738",
                clientEmail: process.env.FIREBASE_CLIENT || "operator@my-wardrobe-1c738.iam.gserviceaccount.com",
                privateKey: process.env.FIREBASE_PRIVATE_KEY || "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEZaKcfzPN0agq\nzJlv8QTcvPYytbLUGG2C4M5bMyKeK8sCbvspTkm8udHGYh2vRqUuhsmrXA8s6aHu\n4GR+sSoVKVys2CROWz1+v+Zf7vmXGfh/dDfIL/GM5KmZWUDFiG6q4d8Ky591l1q1\nOt3JQOEnQjGHAZIjuXiV2QdevsVUSP0LWBYJ46Ol2MbV4KcaiPLm5wjoIIKYz1Kg\nwBe/wkO7qa5ZViMOnYafsjDRbxEw4jvV5nU+KwAsXG4u9/Daa2FJbfCz9Bwu1ZJc\nZVk4ELdy9meUPSh3YEswOIKZjsNioA730Q9ru+yDm624bUt4qP+QGtfDRvGto2xQ\n0ReFpPkLAgMBAAECggEBAIPi5KJHYZhzlIS5RMjBh8xcMNC459A6X0Amiyz/V93z\n9q45rPx+EFJmTpL0TI7p1/84kLE8bwxwEEiD87iIbIQtdIi11RuxdchqQeBmcMGh\ntRiSCOusFn/RBntuTmrYRckHSWrMdtbWvxk44LtHkGt2rh/FVEgdQvcN+T8MySLh\neskNlFcMgenGDR1y/CbfcJiSogxWGa4ehqTj+rmvlWDkTCpNfai0N15Ni/twSZpp\nGG+XEG3iyrlEJ8UMhTyeTxEOTSOMXppjkx/s/+RelIR4cUWx8L2XF5uDA3ksecJN\nUjCWqM42LyagMCW9d/HZKVoppPFUHm5PNaO7KzMjX0ECgYEA8ndkOI7dLyv7RY/i\nfR5/HB5HFgHhvf6jspBZd5cta/JH0bACr93AyTs3L+i7peYxPj4KGMKI8x0a0Wxi\ng1MiTIamP3db8w4pROX5bMb3QQo2HGwhbACM5TqmRyt/CO5tW6UelHyaQXCFPJ4y\n+H5JMrm0PD/iF3BdGAFs1nqctxsCgYEAz1v1FxlGFflELdPgiQVt4WTA+S0MEXER\nOVGF11PbaCiJTkXZGS39TVtUwA6RKdMjos+xpGKr7KvFcIuCC14+je4DvpTZwydW\nkJ2Fk7cP2RGS+FjYuTKkOmwgeM7vi0ZO8b0MNvELmlE6Khou+6vCPNnTs7qf6xUe\nAdVNe0GmNNECgYBpC5Ku8i4fZrWY4IpmXJUDMJbpkO0lLDHthZ5NMoDqOHAnB1NS\nsAb65520MudBK6Z/6c7kBTvh3+UjgAp6DMVaVCeobWS3u5XjlKLoHpc2ZV8mFy6v\npNll4m/xe4Ww7+MPBk1mVUlbOo1uwrcgc03xHQVZ6O9h6jta0BtAHKTSqwKBgHiq\nYXhcm71DvZoRdtMllqiX0ffub9xieIxrVUBVqxL0q9ohqVEOwx1V7X6Ju42kMVOY\nGx620Kc72fxBIp7s6+f5vrITupjm9mfXUpj/6Tf/ExBz20ICJzFcJJVIjnr0ohHo\nWghKwt69L+S6MecAL1rrw1cOXesV8c1NS/ZS4J5RAoGADKerom4xf8itfJ/jKDR5\nyRMnzKkFWmWtrxEuZzBB+HhvbKdAco0pFx4ntT+rG9m8vPAzkzAw7VRL+a7VzW6H\ndehb0kzvLc5FKXT6W7MIMIixzvFAItwaJu1QZmAbMsG+f9MHC7qiJQm92kX/LAHg\n0bzOxBLxadv8dKV7RC/8dxk=\n-----END PRIVATE KEY-----\n"
            },
            databaseURL: process.env.FIREBASE_DATABASE_URL || "https://my-wardrobe-1c738.firebaseio.com"
        }
    })
}