# recruit_api

Start up mongodb-community
```console
foo@bar:~$ brew services start mongodb-community
```

# API Endpoints
<details>
<summary>Registering a new account</summary>

**POST** `http://localhost:8000/auth/register`

### Input

```json
{
    "username": "matt365", 
    "email": "matt365@gmail.com", 
    "password": "mattissmart563"
}
```

### Output

If successful, will return JSON like below
```json
{
    "message": "User created successfully", 
    "username": "matt365", 
    "email": "matt365@gmail.com"
}
```

If failed, will return JSON with message field explanin why it failed
</details>

<details>
<summary>Logging in</summary>

**POST** `http://localhost:8000/auth/login`

### Input

`{"email": "matt365@gmail.com", "password": "mattissmart563"}`

### Output

If successful, will return JSON looking like the following
```json
{
    "token": "ey38ht9heladgih3rh823r89hsdfh398fhsdf98h398h23",
    "user": {
        "username": "matt365",
        "email": "matt365@gmail.com"
    }
}
```
Use the token as a bearer token to make requests requiring login

If failed, will return JSON with message field explanin why it failed
</details>

