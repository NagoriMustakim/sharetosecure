import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Contract, ethers } from 'ethers';
import { contractAddress, ABI } from '../contract'
export const Connectwallet = ({ setSmartContract, walletAddress, setWalletAddress }) => {

    const updateCurrentWalletAddress = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            .catch((err) => {
                if (err.code === 4001) {
                    toast.error("Please connect to MetaMask.'")
                } else {
                    toast.error("Please connect to MetaMask.'")
                }
            });
        try {
            let provider = new ethers.BrowserProvider(window.ethereum)
            let signer = await provider.getSigner();
            let contract = new Contract(contractAddress, ABI, signer)
            if (contract) setSmartContract(contract)
            if (accounts) {
                setWalletAddress(accounts[0])
            }
        } catch (error) {
            toast.error("please try again")
        }


    }
    const connectwallet = async () => {
        if (window.ethereum) {
            updateCurrentWalletAddress()

        }
        else {
            toast.error("You do not have wallet please install wallet")
        }
    }
    useEffect(() => {
        window.ethereum.on('accountsChanged', updateCurrentWalletAddress)
    }, [])
    return (
        <div>
            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <button className='bg-gray-400 font-bold uppercase rounded px-6 py-2 text-sm outline-none focus:outline-none ml-20 mt-6' onClick={connectwallet}>{walletAddress ? `Connected to ${walletAddress}` : "Connect Wallet"}</button>
        </div>
    )
}
