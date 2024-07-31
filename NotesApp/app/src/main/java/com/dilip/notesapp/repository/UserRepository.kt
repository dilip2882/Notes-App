package com.dilip.notesapp.repository

import android.util.Log
import com.dilip.notesapp.api.UserAPI
import com.dilip.notesapp.models.UserRequest
import com.dilip.notesapp.utils.Constants.TAG
import javax.inject.Inject

class UserRepository @Inject constructor(private val userAPI: UserAPI) {

    suspend fun registerUser(userRequest: UserRequest){
        val response = userAPI.signup(userRequest)
        Log.d(TAG, "registerUser: " + response.body().toString())

    }

    suspend fun loginUser(userRequest: UserRequest){
        val response = userAPI.signin(userRequest)
        Log.d(TAG, "loginUser: " + response.body().toString())


    }

}