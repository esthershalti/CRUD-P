/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [InvId]
      ,[InvDate]
      ,[InvStatus]
      ,[InvAmount]
  FROM [WebApiDB].[dbo].[Customer Invoices]