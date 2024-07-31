package com.dilip.notesapp

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import com.dilip.notesapp.databinding.FragmentRegisterBinding
import com.dilip.notesapp.models.UserRequest
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class RegisterFragment : Fragment() {

    private var _binding : FragmentRegisterBinding? = null
    private val binding get() = _binding!!
    private val authViewModel by viewModels<AuthViewModel>()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        // Inflate the layout for this fragment
        _binding = FragmentRegisterBinding.inflate(inflater, container,false)

        binding.btnSignUp.setOnClickListener {
            authViewModel.registerUser(UserRequest("abc@gmail.com", "1234", "abc"))
            //findNavController().navigate(R.id.action_registerFragment_to_mainFragment2)
        }

        binding.btnLogin.setOnClickListener {
            authViewModel.loginUser(UserRequest("abc@gmail.com", "1234", "abc"))

//            findNavController().navigate(R.id.action_registerFragment_to_loginFragment2)
        }

        return binding.root
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}